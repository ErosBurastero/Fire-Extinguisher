<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="black"
          >RENT MODAL</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card class="white">
            <v-toolbar
            
              class=" black white--text d-flex justify-center"
            >CHOOSE THE DAYS TO RENT A FIRE EXTINGUISHER</v-toolbar>
            <v-card-text>
               <v-row >
              <v-col class="d-flex justify-center my-5">
                <v-date-picker color="black" class="black--text  " v-model="dates" range></v-date-picker>
              </v-col>
            </v-row>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                class="white--text black"
                text
                @click="dialog.value = false"
              >Close</v-btn>
               <v-btn
              @click="
                () => {
                  addItem(product.id);
                    dialog.value = false
                }
              "
              class="my-10 black"
              
            >
              RENT
            </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
 </v-row>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({
    sheet: false,
    dates: ["", ""],
  }),

  props: ["product"],

  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
  },

  methods: {
    ...mapMutations(["addItem"]),
  },
};
</script>

<style>

</style>