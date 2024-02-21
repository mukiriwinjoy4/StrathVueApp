<template>
    <div id="homepage">
      <v-container>
        <v-layout column>
          <v-carousel>
            <v-img
              src="public/priscilla-du-preez-ggeZ9oyI-PE-unsplash.jpg"
              cover
            ></v-img>
  
            <v-img
              src="public/gabriel-sollmann-Y7d265_7i08-unsplash.jpg"
              cover
            ></v-img>
  
            <v-img
              src="public/jaredd-craig-HH4WBGNyltc-unsplash.jpg"
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
                  title="Visit & Study"
                  
                  text="Main Library
James Gachui Library
Anjarwalla & Khanna Law Library"
                ></v-card>
  
                <div class="mt-4 text-subtitle-2">With slots</div>
  
                <v-card width="400">
                  <template v-slot:title>Find, Request And Use </template>
  
                    
                  <template v-slot:text
                    >Library Catalog
                    eBooks+
                    Finder+

                  </template>
                </v-card>
  
                <div class="mt-4 text-subtitle-2">With markup</div>
  
                <v-card width="400">
                  <v-card-item>
                    <v-card-title>Help & Assistance</v-card-title>
                      
                  </v-card-item>
  
                  <v-card-text>
                    Research Consultation
                    Online Chat
                    Subject Guides
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
  