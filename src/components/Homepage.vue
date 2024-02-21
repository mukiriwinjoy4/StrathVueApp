<template>
  <div id="homepage">
    <v-container>
      <v-layout column>
        <v-carousel>
          <v-carousel-item
            src="./../../public/camilo-botia-k4vFDPJoDZk-unsplash.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="./../../public/sreesanth-p-NHVI1dkl6WU-unsplash.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="./../../public/vienna-reyes-qCrKTET_09o-unsplash.jpg"
            cover
          ></v-carousel-item>
        </v-carousel>
      </v-layout>
      <v-layout>
        <v-container>
          <v-row align="center" justify="center">
            <div class="d-flex align-center flex-column">
              <div class="text-subtitle-2">With props</div>

              <v-card
                width="400"
                title="STUDENT LIFE"
                subtitle="This is a subtitle"
                text="Whether your campus is small, tall, grande, or venti, you are probably amazed by the array of institutionally supported student activities available for your enrichment and enjoyment. Perhaps your biggest challenge is deciding how much extra time you have after studying and which added activities yield the greatest reward.
Below are two videos that give a sample of campus life at two different types of colleges. The first is from a large state institution—the University of Maryland. The second is from a smaller, private college—Baldwin Wallace University. Regardless, though, of where your institution fits on the spectrum of size, or how many activities, clubs, and organizations your institution offers, it's very important for you to be able to explore cocurricular interests—for learning, enjoyment, and personal satisfaction. Student life should always be satisfying and rewarding to students, as well as to alumni, faculty, staff, and community members. Together, these groups are an institution’s lifeblood.
"
              ></v-card>

              <div class="mt-4 text-subtitle-2">With slots</div>

              <v-card width="400">
                <template v-slot:title> STUDENT APARTMENT </template>

                <template v-slot:subtitle> This is a subtitle </template>

                <template v-slot:text
                  >It is generally known that for a university, the students
                  consist of many different culture and ethic. They come from
                  various cities, sometimes, even from different country.
                  Therefore, these students might need a place to stay that is
                  much nearerto the university. These accommodations are usually
                  provided by the university. However, the numbers are limited
                  and the numbers of student are always on the rise thus
                  creating a chronic shortage of safe, secure and affordable
                  accommodation. Students find accommodation in a variety of
                  forms and arrangements according to their individual needs.
                  The range of accommodation types is extensive, from modified
                  buildings that are used as ‘share houses’ to ‘purpose built
                  student accommodation facilities’.
                </template>
              </v-card>

              <div class="mt-4 text-subtitle-2">With markup</div>

              <v-card width="400">
                <v-card-item>
                  <v-card-title>SPORTS & CLUBS</v-card-title>

                  <v-card-subtitle>This is a subtitle</v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  Sports-how do sports help the urban core? “Sport has the power
                  to change the world. It has the power to inspire. It has the
                  power to unite people in a way that little else does. Sport
                  can awaken hope where there was previously only despair. Sport
                  speaks to people in a language they can understand.” Nelson
                  Mandela. Sport contributes to community identity, serving as a
                  focal point for engagement, pride, and achievement. The
                  diversity of sports and sporting activities (including social
                  sport and physical recreation) makes it an ideal medium to
                  reach men and women from every age-group, culture, and
                  socio-economic background. The broader benefits of sports go
                  beyond the personal benefits derived from participation.
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
