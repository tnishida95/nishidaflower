<template>
  <v-container>
    <h1 class="display-2 font-weight-bold mb-3 text-center">Request Quote</h1>
    <p class="subheading font-weight-regular text-center">
      Thank you for considering Nishida Flowers for your floral needs!
      <br>
      Please read the following before continuing:
      <br>
    </p>
    <ul style="display: table; margin: 0 auto;">
      <li>This is just a request!  Order need to be confirmed after quote is sent via email.</li>
      <li><strong>Quotes must be accepted a minimum of 48 hours from the delivery date.</strong></li>
      <li>Flowers can be ordered up to one month in advanced!</li>
      <li>Payment is due 24 hours before day of delivery, via Venmo only.</li>
    </ul>

    <br>
    <h2 class="text-center">Delivery Information</h2>
    <br>

    <v-row class="justify-center">
      <v-simple-table dense style="max-width: 600px;" class="justify-center">
        <template v-slot:default>
          <thead>
            <th>Day</th>
            <th>Earliest</th>
            <th>Latest</th>
          </thead>
          <tbody>
            <tr>
              <td>Monday-Friday</td>
              <td>5:00 PM</td>
              <td>8:00 PM</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>12:00 PM</td>
              <td>6:00 PM</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>10:00 AM</td>
              <td>5:00 PM</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-row>

    <br>
    <h2 class="text-center">Form</h2>
    <br>

    <v-row class="justify-center">
      <v-card class="justify-center">

        <v-card-title class="text-center">About You</v-card-title>
        <v-card-text>
          <v-form class="px-4">
            <v-row>
              <v-col cols="6">
                <v-text-field label="First Name*" v-model="firstName" prepend-icon="mdi-account" required hide-details="true"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Last Name*" v-model="lastName" hide-details="true"></v-text-field>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>
            <v-text-field label="Email*" v-model="email" hide-details="true"></v-text-field>
            <v-text-field label="Phone*" v-model="phone" hide-details="true"></v-text-field>
            <v-text-field label="Instagram Handle" v-model="ighandle"></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-title class="text-center">About Flowers</v-card-title>
        <v-card-text>
          <v-menu
            v-model="calendarMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="deliveryDate"
                label="Delivery Date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on">
              </v-text-field>
            </template>
            <v-date-picker v-model="deliveryDate" @input="calendarMenu = false"
              :min="minDate" :max="maxDate">
            </v-date-picker>
          </v-menu>
          <v-form class="px-4>">
            <v-textarea label="Description" v-model="description" outlined
              placeholder="Provide a description of your arrangement that we can use as a starting point!">
            </v-textarea>
          </v-form>
        </v-card-text>

        <v-card-text>
          <v-card-actions>
            <v-btn @click="submit">Submit</v-btn>
          </v-card-actions>
        </v-card-text>

      </v-card>
    </v-row>
  </v-container>
</template>

<script>

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 2);
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);

  export default {
    name: 'Quote',
    data: () => ({
      firstName: "",
      lastName: "",
      description: "",
      email: "",
      phone: "",
      ighandle: "",
      deliveryDate: new Date().toISOString().substr(0, 10),
      minDate: minDate.toISOString(),
      maxDate: maxDate.toISOString(),
      calendarMenu: false
    }),
    methods: {
      submit() {
        console.log(this.firstName, this.lastName, this.description, this.deliveryDate);
      }
    }
  }
</script>
