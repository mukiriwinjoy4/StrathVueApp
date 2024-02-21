<template>
    <div id="homepage">
      <v-container>
        <v-layout column>
          <v-carousel>
            <v-img
              src="public/julian-hochgesang-Dkn8-zPIbwo-unsplash.jpg"
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
                  title="Want To Know More?"
                  
                  text="Reach Out To Us!"
                ></v-card>
  
                <div class="mt-4 text-subtitle-2">With slots</div>
  
                <v-card width="400">
                  <template v-slot:title> Full Name </template>
  
                    
                  <template v-slot:text
                    >Email
                  </template>
                </v-card>
  
                <div class="mt-4 text-subtitle-2">With markup</div>
  
                <v-card width="400">
                  <v-card-item>
                    <v-card-title>Phone</v-card-title>
                      
                  </v-card-item>
  
                  <v-card-text>
                    Submit
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
  