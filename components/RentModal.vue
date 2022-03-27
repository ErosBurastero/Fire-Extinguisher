<template>
  <div class="text-center">
    <v-bottom-sheet v-model="sheet" inset>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="black" dark v-bind="attrs" v-on="on"> Rent Modal </v-btn>
      </template>
      <div class="my-16">
        <v-sheet class="text-center" height="500px">
          <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
            close
          </v-btn>
          <div class="my-3">
            Select the days that you will rent the fire extinguisher
            <v-row>
              <v-col cols="12" sm="6">
                <v-date-picker v-model="dates" range></v-date-picker>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="dateRangeText"
                  label="Date range"
                  prepend-icon="mdi-calendar"
                  readonly
                ></v-text-field>
                <v-btn 
                  @click="
                    () => {
                      addItem(product.id);
                      sheet= !sheet
                    } 
                  "
                  class="my-5"
                  depressed
                >
                  RENT
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-sheet>
      </div>
    </v-bottom-sheet>
  </div>
</template>

<script>
import {mapMutations} from "vuex";
export default {
  data: () => ({
    sheet: false,
    dates: ["2022-04-10", "2022-04-20"],
    
  }),

  props: ['product'],

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
