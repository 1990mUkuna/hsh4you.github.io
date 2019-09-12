<script src='lib/moment.min.js'></script>
<script src='lib/jquery.min.js'></script>
<script src='lib/fullcalendar.min.js'></script>
<script src='lib/locale-all.js'></script>
<script src='lib/gcal.min.js'></script>

<script>
    const GCAL_ID_ASP_FORT_ROBINSON = 'pdlch0pec0k9crrmvh9vdhm810@group.calendar.google.com';
    const GCAL_ID_AUSBLICK          = '3ve7887dig4ikb3hb5rnvf8ivk@group.calendar.google.com';
    const GCAL_ID_FULL_HOUSE        = 'annc0a8a4ntsulolgo2ropqgmo@group.calendar.google.com';
    const GCAL_ID_JUMP              = 'n1act6htsoc6o2dmv6en0m46og@group.calendar.google.com';

    const GCAL_ID_KONTAKTLADEN_VIP  = 'mgc4ktl3bsnsu08srns3edj9ns@group.calendar.google.com';
    const GCAL_ID_LEOS_HUETTE       = 'ogt28htdpfpo5ol0du43lrpm00@group.calendar.google.com';
    const GCAL_ID_MIKADO            = 'n5vjrpscf33mtl45aui6f8a5ms@group.calendar.google.com';
    const GCAL_ID_OCB               = 'cml5lgcpqfmdod8mvpoouvurv4@group.calendar.google.com';

    const GCAL_ID_PIA_OLYMP         = 'ed2ovnpustflmtgcc4j2b6immg@group.calendar.google.com';
    const GCAL_ID_SPIK              = '7st9dvauansj1nov4pf1choroo@group.calendar.google.com';
    const GCAL_ID_TRIALOG           = 'jo7updm739iaqbri2jc8sg1qt8@group.calendar.google.com';
    const GCAL_ID_WELSECLUB         = '7o3tno9fndbov6thqvb10ogm44@group.calendar.google.com';

    $(document).ready(function() {
        var showweeklyevents = true;

        $('#calendar').fullCalendar({
            // hide scrollbars via contentHeight auto
            // source: https://github.com/fullcalendar/old-docs/blob/master/display/contentHeight.txt
            contentHeight: 'auto',
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'today'
            },
            locale: 'de',
            defaultView: 'listDay',
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
            views: { listDay: { titleFormat: 'dddd' } }
        });
    });
</script>

<div id='calendar'></div>
