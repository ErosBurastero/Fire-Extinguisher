<template>
  <div class="text-center">
    <v-bottom-sheet v-model="sheet" inset>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="black" dark v-bind="attrs" v-on="on"> Rent Modal </v-btn>
      </template>
      <div class="d-flex justify-center">
        <v-sheet
          class="text-center"
          min-height="300px"
          height="700px"
          width="700px"
        >
          <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
            close
          </v-btn>
          <div class="">
            Select the days that you will rent the fire extinguisher
            <v-row>
              <v-col class="d-flex justify-center">
                <v-date-picker v-model="dates" range></v-date-picker>
              </v-col>
            </v-row>

            <v-btn
              @click="
                () => {
                  addItem(product.id);
                  sheet = !sheet;
                }
              "
              class="my-10"
              depressed
            >
              RENT
            </v-btn>
          </div>
        </v-sheet>
      </div>
    </v-bottom-sheet>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({
    sheet: false,
    dates: ["2022-04-10", "2022-04-20"],
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
