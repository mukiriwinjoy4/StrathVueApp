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
               
                    <v-card width="400">
                  <v-card-item>
                    <v-card-title>{{ componentTitle }}</v-card-title>
                    </v-card-item>
  
                    <v-card-text>
                        <v-list
                        :items="courses"
                        item-title="courseName"
                        item-value="id"
                        ></v-list>
                    </v-card-text>
                </v-card>
              </div>
            </v-row>
          </v-container>
        </v-layout>
      </v-container>
    </div>
  </template>
  <script>
  export default {
    // Properties returned from data() become reactive state
    // and will be exposed on `this`.
    data() {
      return {
        courses:[
            {
                id: 1,
                courseName: 'Hospitality Management'
            },
            {
                id: 2,
                courseName: 'Financial Economics'
            },
            {
                id: 3,
                courseName: 'Computer Science'
            },
            {
                id: 4,
                courseName: 'Psychology'
            },
            {
                id: 5,
                courseName: 'Software Engineering'
            },
            {
                id: 6,
                courseName: 'Agricultural Economics'
            },
            {
                id: 7,
                courseName: 'Architecture'
            },
            {
                id: 8,
                courseName: 'Interior Design'
            },
            {
                id: 9,
                courseName: 'Forensic Science'
            },
            {
                id: 10,
                courseName: 'Nursing'
            }
        ],
        componentTitle: 'Courses at Strath Uni'
      }
    },
  
    // Methods are functions that mutate state and trigger updates.
    // They can be bound as event handlers in templates.
    methods: {
      increment() {
        this.count++
      }
    },
  
    // Lifecycle hooks are called at different stages
    // of a component's lifecycle.
    // This function will be called when the component is mounted.
    mounted() {
      console.log(`The initial count is ${this.count}.`)
    }
  }
  </script>

  
  