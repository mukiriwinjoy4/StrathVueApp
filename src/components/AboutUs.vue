<template>
  <div id="homepage">
    <v-container>
      <v-layout column>
        <v-carousel>
          <v-img
            src="public/juni-nguyen-sqvyjtoQC2I-unsplash.jpg"
            cover
          ></v-img>

          <v-img src="public/vasily-koloda-8CqDvPuo_kI-unsplash.jpg"
           cover
           ></v-img>

          <v-img
            src="public/priscilla-du-preez-ggeZ9oyI-PE-unsplash.jpg"
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
                title="History"
                subtitle="This is a subtitle"
                text="Strathmore College was started in 1961 as an Advanced-level Sixth Form College offering Science and Arts subjects by a group of professionals, who formed a charitable Educational Trust (now the Strathmore Educational Trust). Strathmore College was the first in Pre-independence Kenya to accommodate all races, religions, and social standing. Saint Josemaría Escrivá, the founder of Opus Dei, inspired and encouraged them to start the College.

In March 1966, the first intake of Accountancy students, twenty-five in number, joined the Sixth Form students and began preparing for the examinations of the UK-based Association of Chartered Certified Accountants (ACCA). These first Accountancy students were sponsored by Shell East Africa, BAT (East Africa), and the East African Breweries. At this time Strathmore College was unique as a fully integrated post-Form 4 institution offering both academic and professional courses.

"
              ></v-card>

              <div class="mt-4 text-subtitle-2">With slots</div>

              <v-card width="400">
                <template v-slot:title> Enrollment </template>

                <template v-slot:subtitle> This is a subtitle </template>

                <template v-slot:text
                  >A total population of 4,393 students(full-time and part-time)
                  studying Accountancy, Administration, Commerce, Finance,
                  Management, and Information Technology.
                </template>
              </v-card>

              <div class="mt-4 text-subtitle-2">With markup</div>

              <v-card width="400">
                <v-card-item>
                  <v-card-title>Becoming a University</v-card-title>

                  <v-card-subtitle>This is a subtitle</v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  In August 2002 the Commission of Higher Education awarded
                  Strathmore a Letter of Interim Authority to operate as a
                  University with a Faculty of Commerce and a Faculty of
                  Information Technology. The first undergraduate students to
                  enroll in these faculties completed their 4-year degree course
                  in December 2004 and graduated in August 2005. In June 2007,
                  Kenya’s Commission for Higher Education approved the award of
                  a charter to Strathmore University.
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
