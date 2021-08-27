<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-carousel v-model="model">
      <v-carousel-item
        v-for="(color, i) in colors"
        :key="color"
      >
        <v-sheet
          :color="color"
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="text-h2">
              Slide {{ i + 1 }}
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-container>
      <v-row
        justify="start"
      >
        <v-col
          v-for="i in 5"
          :key="i"
          cols="3"
        >
          <v-card

            class="mx-auto"
            max-width="400"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Evan You</v-list-item-title>
                </v-list-item-content>

                <v-row
                  align="center"
                  justify="end"
                >
                  <v-icon class="mr-1">
                    mdi-heart
                  </v-icon>
                  <span class="subheading mr-2">256</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1">
                    mdi-share-variant
                  </v-icon>
                  <span class="subheading">45</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange'
      ],
      model: 0
    }
  }
}
</script>
