<template>
  <v-container>
    <v-row>
      <v-col cols="3" v-for="i in 9" :key="i">
        <v-card :key="i" elevation="2" outlined shaped>
          <v-card-title> Product 1 </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            officiis obcaecati consequatur, molestiae autem nostrum voluptatibus
            commodi cumque! Assumenda, iusto praesentium officia quisquam illum
            magnam fuga laboriosam nobis at voluptatum!
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  type="number"
                  outlined
                  small
                  placeholder="QTY"
                />
              </v-col>
              <v-col>
                <v-btn color="success" outlined large> Add To Cart </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
