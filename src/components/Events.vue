<template>
  <div id="homepage">
    <v-container>
      <v-layout column>
        <v-carousel>
          <v-img
            src="./../../public/mikael-kristenson-3aVlWP-7bg8-unsplash.jpg"
            cover
          ></v-img>

          <v-img
            src="./../../public/pexels-wendy-wei-1190298.jpg"
            cover
          ></v-img>

          <v-img
            src="./../../public/pexels-pixabay-433452.jpg"
            cover
          ></v-img>
        </v-carousel>
      </v-layout>
      <v-layout>
        <v-container>
          <v-row align="center" justify="center">
            <div class="d-flex align-center flex-column">
              <div class="text-subtitle-2">With props</div>

              <v-card
                width="400"
                title="Stuff a Plush Events"
                subtitle="This is a subtitle"
                text="Who doesn’t love a stuffed animal to snuggle with? These are great for back to school events, homecoming or Family Weekends and Valentine’s Day is always a hit! They come with the unstuffed plush animal and a vacuum-sealed, individual packs of stuffing to make the day of event logistics a breeze! Are you looking to add a shirt with your logo or other graphic? We’ve got you covered there too!

"
              ></v-card>

              <div class="mt-4 text-subtitle-2">With slots</div>

              <v-card width="400">
                <template v-slot:title> Campus Concerts </template>

                <template v-slot:subtitle> This is a subtitle </template>

                <template v-slot:text
                  >Concerts on campus are one of the most popular
                  extracurricular activities, second only to athletics in terms
                  of head count and tickets distributed. Unlike athletics
                  however, music concerts are under the control of the school
                  itself. When a major musical act performs at a school, it is
                  basically treated as just another venue by the band's booking
                  agent. Appearance fees are 100% applicable when Maroon 5 plays
                  at a college or at the city stadium. The stadium does not have
                  to disclose what dollar amount was paid for the appearance
                  fee. A college practicing the same opacity may find itself in
                  a minor controversy.
                </template>
              </v-card>

              <div class="mt-4 text-subtitle-2">With markup</div>

              <v-card width="400">
                <v-card-item>
                  <v-card-title>Play Sports</v-card-title>

                  <v-card-subtitle>This is a subtitle</v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  Our fully participative events will truly inspire your
                  audience as they actively experience the world of professional
                  sport at some of the UK’s most iconic sporting venues. Whether
                  you’re looking to bring your employees together, connect with
                  your customers and clients, or give back to the local
                  community, we can help you achieve your goals.
                </v-card-text>
              </v-card>
            </div>
          </v-row>
        </v-container>
      </v-layout>
    </v-container>
  </div>
</template>
<script setup>
const variants = ["elevated", "flat", "tonal", "outlined"];
</script>
