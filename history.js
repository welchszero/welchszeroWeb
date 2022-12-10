function translator() {
    let englishList = [
        "The cinema of South Korea has become a \
        <span>large market in the world</span>, with the increasing global success and\
         globalization of the Korean film industry.",

         "According to the Motion Picture Association of America (MPAA),\
          the value of the cinema of South Korea in 2018 was USD 1.6 billion \
          out of the global film market of USD 41.1 billion, placing the value of \
          South Korean cinema at the <span>fifth largest in the world</span> following North America, \
          China, Japan, and the United Kingdom.",

          "South Korea ranks <span>first for attendance frequency per capita in the world</span>,\
           and Korean films take 51% of the local box offices.",

           "Korean cinema, the history of which spans 101 years, has been recognized for \
           its cinematic quality at international film festivals, and is currently being \
           introduced widely around the world. Since 1961, when The Coachman became \
           the first Korean film to win the Silver Bear Extraordinary Jury Prize at \
           the Berlin International Film Festival, South Korean films have <span>stood out \
           at the most prestigious film festivals in the world</span>, known as the\
            Big Three: Berlin (Germany), Cannes (France), and Venice (Italy).",

        "Films such as Old Boy, Oasis, Burning, and On the Beach at Night Alone won leading awards \
        in major categories. Famous Korean film directors such as Bong Joon-ho, Im Kwon-taek,\
         Lee Chang-dong, Park Chan-wook, Hong Sang-soo, and Kim Jee-woon are <span>attracting attention\
          in the global film industry.</span>",

          "In 2019, Bong Joon-ho became the first Korean director to <span>win the Palme d’Or </span>at the Cannes \
          Film Festival for his latest film Parasite, which also won four leading awards \
          at the Academy Awards in 2020. This has triggered more global interest in Korean films.",

          "As Parasite took home the <span>most awards at the Oscars 2020</span>, winning four \
          Academy Awards including Best Picture, Directing, International Feature Film, \
          and Writing, world media began earnestly reporting about Korean films. For example, \
          the British newspaper, Guardian, recommended the film The Handmaiden, and Rotten \
          Tomatoes, an American review-aggregation website for film and television, spotlighted Poetry.",

          "Furthermore, South Korea also <span>holds various international film festivals</span> to enhance the status\
           of its films, which serve as a driving force for the further development of the Asian film industry.\
            For instance, the Busan International Film Festival, the largest film festival in South Korea,\
             the Bucheon International Fantastic Film Festival, and the Jeonju International Film Festival\
              attract attention from filmmakers around the world each year with a variety of concepts and programs.",

              "In addition, South Korean films are gaining great popularity through OTT platforms. Specifically,\
               #Alive, a South Korean zombie film released in June 2020, is an example of successful Korean films\
                introduced abroad through OTT media services. It <span>topped the global movie charts </span>in 35 countries two\
                 days after its release on Netflix.",

          "Moving beyond the Hallyu craze South Korean dramas are <span>gaining attention from around the world</span>,\
           recognized as an independent genre called K-dramas.",

           "Korean dramas have been <span>steadily loved </span>around the world after What Is Love made a splash in China\
            in 1997 and Winter Sonata was a big hit in Japan in 2002.",

            "Dae Jang Geum (MBC), an epic TV series about royal cuisine, which aired between 2003 and 2004,\
             was <span>exported to 91 countries</span> around the world including Japan, China, and Turkey.\
              This drama expanded the scope of the Korean Wave into Korean food, fashion,\
               and medicine while drawing global interest in Korean culture.",

               "In 2013, TV dramas such as My Love from the Star and That Winter, the Wind Blows,\
                were loved by international fans, while in 2016, Dokkaebi (Guardian: \
                    The Lonely and Great God), Moonlight Drawn by Clouds, and Descendants\
                     of the Sun revived the <span>Hallyu craze.</span>",

        "In 2019, Netflix’s first original Korean drama Kingdom successfully <span>gained international traction</span>.\
         The high recognition of its cinematography based on the well-organized script and directing\
          ability naturally led to the production of Kingdom Season 2 and the creation of a new genre\
           called K-zombies. It is interesting that foreign viewers, using their social networking\
            services, freely expressed their appreciation for the architecture and clothing\
             styles of the Joseon dynasty, the background of the drama series. In particular,\
              the growing curiosity about the Korean traditional hat for men called gat contributed\
               to the increase in its sale on the global online shopping website Amazon.com.",

               "As such, Korean dramas, recognized for their <span>topicality and cinematography</span>, have been \
               expanding their fan base abroad in 2020. This is because they have benefited\
                from the over-the-top (OTT) market, which has rapidly grown worldwide because of COVID-19.",

                "Crash Landing on You, which aired in 2020, was premiered in 190 countries through Netflix.\
                 This drama is about a romance between a South Korean heiressof chaebol (conglomerate)\
                  and a captain in the North Korean Army. It caused a sensation in Asia, including Japan,\
                   where it reached the list of the <span>top 10 most popular TV shows</span> on Netflix in Japan for 10 weeks."
    ];
    elemList = document.getElementsByTagName("li");
    for(let i = 0; i < elemList.length; i++){
        elemList[i].innerHTML = englishList[i];
    }
}