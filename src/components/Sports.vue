<template>
  <div class="container">
    <div class="holder">
      <h1>Your Favorite Sports</h1>
      <form action="" @submit.prevent="addSport">
      <input type="text" v-model="newSport.sport" v-validate="'min:5'"  name="sport" placeholder="Add Your Favorite Spots">
       <p v-if="errors.has('sport')">{{ errors.first('sport') }}</p>
      </form>
      
      <ul>
        <li v-for="(data,index) in sports" :key="index"> {{data.sport}} 
          <button v-on:click="deleteSport(index)">-</button>
        </li>
       
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sports",
  data() {
    return {
      sport: "",
      sports: [{ sport: "Football" }, { sport: "Cricket" }],
      newSport: {}
    };
  },
  methods: {
    addSport() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.sports.push({ sport: this.newSport.sport });
          this.newSport.sport = "";
        } else {
          console.log("not Validate");
        }
      });
    },
    deleteSport(data) {
      this.sports.splice(this.sports.indexOf(data, 1));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.holder {
  background: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}
input[type="text"] {
  width: 100%;
  border: none;
  background: #3e5252;
  padding: 20px 0px;
  height: 100%;
  color: #e0edf4;
  font-size: 24px;
}
button {
  border-radius: 100%;
  float: right;
  border: none;
  background: #3e5252;
  cursor: pointer;
}
</style>
