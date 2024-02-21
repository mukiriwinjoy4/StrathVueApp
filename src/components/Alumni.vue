<template>
    <div id="homepage">
      <v-container>
        <v-layout column>
          <v-carousel>
            <v-img
              src="public/jose-fabula-13vMsnt4jTY-unsplash.jpg"
              cover
            ></v-img>
  
            <v-img
              src="public/wonderlane-6zlgM-GUd6I-unsplash.jpg"
              cover
            ></v-img>
  
            <v-img
              src="public/ryan-jacobson-cXUOQWdRV4I-unsplash.jpg"
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
                  title="All Strathmore, all together,all in one place. All right now."
                  subtitle="This is a subtitle"
                  text="The alumni Directory just got a major upgrade! Upgrade your profile today and start making more meaningful conections in the only place where everyone is a verified strathmore alumni. Modernized fields, filters and settings make it easier to find and connect alumni create your profile, access my account and more."
                ></v-card>
  
                <div class="mt-4 text-subtitle-2">With slots</div>
  
                <v-card width="400">
                  <template v-slot:title> Explore the Directory </template>
  
                    
                  <template v-slot:text
                    >
                  </template>
                </v-card>
  
                <div class="mt-4 text-subtitle-2">With markup</div>
  
                <v-card width="400">
                  <v-card-item>
                    <v-card-title></v-card-title>
                      
                  </v-card-item>
  
                  <v-card-text>
                    
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
  