<script>
    var youthclubnames = {};
    youthclubnames[GCAL_ID_ASP_FORT_ROBINSON] = 'ASP Fort Robinson';
    youthclubnames[GCAL_ID_AUSBLICK] = 'Ausblick';
    youthclubnames[GCAL_ID_FULL_HOUSE] = 'Full House';
    youthclubnames[GCAL_ID_JUMP] = 'JuMP';
    youthclubnames[GCAL_ID_KONTAKTLADEN_VIP] = 'Kontaktladen VIP';
    youthclubnames[GCAL_ID_LEOS_HUETTE] = 'Leos Hütte';
    youthclubnames[GCAL_ID_MIKADO] = 'Mikado';
    youthclubnames[GCAL_ID_OCB] = 'OCB';
    youthclubnames[GCAL_ID_PIA_OLYMP] = 'Pia Olymp';
    youthclubnames[GCAL_ID_SPIK] = 'SPIK';
    youthclubnames[GCAL_ID_TRIALOG] = 'Trialog';
    youthclubnames[GCAL_ID_WELSECLUB] = 'Welseclub';

    var youthclublinks = {};
    youthclublinks[GCAL_ID_ASP_FORT_ROBINSON] = 'ASP_Fort_Robinson';
    youthclublinks[GCAL_ID_AUSBLICK] = 'Ausblick';
    youthclublinks[GCAL_ID_FULL_HOUSE] = 'jfe_fullhouse';
    youthclublinks[GCAL_ID_JUMP] = 'JUMP';
    youthclublinks[GCAL_ID_KONTAKTLADEN_VIP] = 'Kontaktladen_VIP';
    youthclublinks[GCAL_ID_LEOS_HUETTE] = 'Leos_Huette';
    youthclublinks[GCAL_ID_MIKADO] = 'Mikado';
    youthclublinks[GCAL_ID_OCB] = 'OCB';
    youthclublinks[GCAL_ID_PIA_OLYMP] = 'Pia_Olymp';
    youthclublinks[GCAL_ID_SPIK] = 'SPIK_JK';
    youthclublinks[GCAL_ID_TRIALOG] = 'jfe_trialog';
    youthclublinks[GCAL_ID_WELSECLUB] = 'jfe_welseclub';

    $(document).ready(function() {

        $('#calendar').fullCalendar({
            // hide scrollbars via contentHeight auto
            // source: https://github.com/fullcalendar/old-docs/blob/master/display/contentHeight.txt
            contentHeight: 'auto',
            header: {
                left: 'listMonth,listDay,today',
                center: 'title',
                right: 'prev,next'
            },
            locale: 'de',
            views: { 
                listDay: { titleFormat: 'ddd Do MMMM YYYY' },
            },
            // to cache the daily events default view is listMonth and once page is loaded will switch to listDay
            // unfortunately fullcalendar.io caching does not work for visibleRange / https://fullcalendar.io/docs/visibleRange
            defaultView: 'listMonth',
            googleCalendarApiKey: 'AIzaSyDbIw2HzwKWmQY9o0h5UuZO6MCchQDCZbw',
            eventSources: [
                  GCAL_ID_ASP_FORT_ROBINSON
                , GCAL_ID_AUSBLICK
                , GCAL_ID_FULL_HOUSE
                , GCAL_ID_JUMP
                , GCAL_ID_KONTAKTLADEN_VIP
                , GCAL_ID_LEOS_HUETTE
                , GCAL_ID_MIKADO
                , GCAL_ID_OCB
                , GCAL_ID_PIA_OLYMP
                , GCAL_ID_SPIK
                , GCAL_ID_TRIALOG
                , GCAL_ID_WELSECLUB
            ],
            eventDataTransform: function(eventData) {
                // source: https://stackoverflow.com/a/48932810 ("fullcalendar - eventclick changing URL")
                if (eventData.url.indexOf("google") >= 0) {
                    eventData.url = null;
                }
                if (eventData.description) {
                    var desc = eventData.description;
                    var urlstart = desc.lastIndexOf("http");
                    var url = desc.substring(urlstart).replace("</a>", "");
                    eventData.url = url;
                }
                return eventData;
            },
            eventRender: function(event, element) {
                calendarid = event.source.googleCalendarId;
                youthclubname = youthclubnames[calendarid];
                youthclublink = youthclublinks[calendarid] + '.html';
                // source: https://stackoverflow.com/a/3924862 ("fullCalendar - Event title and detail")
                element.find('a').append(' @ ' + youthclubname);
                // source: https://stackoverflow.com/a/179717 ("How to change the href for a hyperlink [..]"")
                element.find('a').attr('href', youthclublink);
                element.find('a')[0].classList.add('link_in_text');
            },
            // source: https://fullcalendar.io/docs/v3/eventAfterAllRender
            eventAfterAllRender: function(view) {
                $('.fc-list-heading').remove();
                // make only youthclub name clickable link
                $('.fc-list-item-title').each(function(index, item){
                    var eventlink = $(item).find('a');
                    var eventname = eventlink.text().split(' @ ')[0];
                    var eventlocation = eventlink.text().split(' @ ')[1];
                    eventlink.html(' @ ' + eventlocation);
                    $(item).html(eventname + $(item).html());
                });
            }
        });
    });
</script>

<div id='calendar'></div>

<script type="text/javascript">
  // switch to listDay view once page is loaded and hide buttons
  document.addEventListener("DOMContentLoaded", function(event) {
      setTimeout(function() {
        $('.fc-listDay-button').click();
        $('.fc-listDay-button').remove();
        $('.fc-listMonth-button').remove();
      }, 1);
  });
</script>

