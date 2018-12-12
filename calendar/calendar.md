<script src='lib/moment.min.js'></script>
<script src='lib/jquery.min.js'></script>
<script src='fullcalendar.min.js'></script>
<script src='locale-all.js'></script>
<script>

  $(document).ready(function() {
    var initialLocaleCode = 'de';

    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: ''
      },
      locale: initialLocaleCode,
      buttonIcons: false, // show the prev/next text
      weekNumbers: false,
      navLinks: false, // can click day/week names to navigate views
      editable: false,
      views: {
        listMonth: { buttonText: 'Liste' }
      },
      defaultView: 'listMonth',
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'Stadtteilkonferenz zur Planung HSH Nord (Aula der Fritz-Reuter-Schule)',
          url:   'https://www.google.com/maps/?q=Aula der Fritz-Reuter-Schule Berlin',
          start: '2018-11-27T17:00',
          end:   '2018-11-27T20:00'
        },
        {
          title: 'On Air Theaterstück von Kiez to Go (im Nachbarschaftshaus Ribnitzer Str. 1b)',
          url:   'https://www.google.com/maps/?q=Ribnitzer Str. 1b Berlin',
          start: '2018-11-28T19:00'
        },
        {
          title: 'Weihnachtsmarkt auf dem Vorplatz am S-Bhf Wartenberg',
          url:   'https://www.google.com/maps/?q=S Wartenberg Berlin',
          start: '2018-12-08T14:00',
          end:   '2018-12-08T18:00'
        },
        {
          title: 'Malchower Weihnachtsmarkt auf dem Gelände der Naturschutzstation',
          url:   'https://www.google.com/maps/?q=Naturschutzstation Malchow Berlin',
          start: '2019-12-09'
        },
        {
          title: 'Fachtagung der Berliner Jungs',
          url:   'https://www.google.com/maps/?q=Berliner Jungs',
          start: '2019-03-15',
          end:   '2019-03-16'
        },
        {
          title: 'Erste Hilfe Kurs am Kind im FZ Grashalm (Anmeldung nötig)',
          url:   'https://www.google.com/maps/?q=FZ Grashalm Berlin',
          start: '2019-03-27'
        },
        {
          title: 'Kiezfest am Malchower See – unter dem Motto „Fete de la Musique“',
          url:   'https://www.google.com/maps/?q=Malchower See Berlin',
          start: '2019-06-21'
        },
        {
          title: 'Graffiti im SPIK-Jugendklub',
          url:   'https://www.google.com/maps/?q=SPIK-Jugendklub Berlin',
          start: '2018-12-05T15:00'
          end:   '2018-12-05T18:00'
        },
        {
          title: 'Graffiti im SPIK-Jugendklub',
          url:   'https://www.google.com/maps/?q=SPIK-Jugendklub Berlin',
          start: '2018-12-12T15:00'
          end:   '2018-12-12T18:00'
        },
        {
          title: 'Graffiti im SPIK-Jugendklub',
          url:   'https://www.google.com/maps/?q=SPIK-Jugendklub Berlin',
          start: '2018-12-19T15:00'
          end:   '2018-12-19T18:00'
        }
      ]
    });
  });

</script>

<div id='calendar'></div>
