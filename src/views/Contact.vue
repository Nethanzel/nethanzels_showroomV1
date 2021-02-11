<template>
  <div class="contact">
    <headeR />
    <h1>Get in touch with me!</h1>
    <div class="infoCont">
      <p>
        You can mail me to my email inbox whenever you want to do it (<span>natanaelabaad@gmail.com</span>) or send a direct message on 
        <a href="https://t.me/nethanzel" target="_blank">Telegram</a>.
      </p>

      <p>
        Not only you can use the above methods, but also you can leave me a message right here: 
      </p>

      <div id="contactForm">
        <input type="text" id="" class="input" placeholder="Your name">
        <input type="text" id="" class="input" placeholder="Any method to contact you back (mail direction or phone number)">
        <textarea id="" cols="30" rows="30" class="input" placeholder="Your message"></textarea>

        <div class="btnParent">
          <span class="btn">Send</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import headeR from '@/components/navegationMenu.vue'

export default {
  name: "Contact",
  title: "Nethanzêl's Showroom", 
  components: {
    headeR
  }
  
}
</script>

<style scoped lang="scss">

.contact {
  mix-blend-mode: difference;
  will-change: opacity;
  padding-top: 60px;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.infoCont {
  border: 2px solid #fff;
  width: 60%;
  height: auto;
  background: #99999944;
  padding: 10px 10px;
}

h1 {
  margin-bottom: 25px;
}

p {
  text-align: justify;
  margin-bottom: 15px;
}

a, span {
  background: #fff;
  color: #000;
  padding: 2px 5px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
}

.input {
  display: block;
  outline: none;
  border: none;
  margin: 10px 0;
  padding: 5px 5px; 
  color: #000;
  font-size: 16px;
  opacity: .7;
  transition: .6s;
}

.input:hover {
  display: block;
  outline: none;
  border: none;
}

input:focus {
  opacity: 1;
  transition: .6s;
}

textarea {
  resize: none;
  height: 85px;
  transition: .6s;
}

textarea:focus {
  opacity: 1;
  transition: .6s;
}


#contactForm {
  display: flex;
  flex-direction: column;
  padding: 0 100px;
}

.btnParent {
  padding: 10px;
}

.btn {
  padding: 5px 30px;
  opacity: .7;
  transition: .6s;
  display: none; //this will only be visible if the fields are correctly filed
}

.btn:hover {
  opacity: 1;
  transition: .6s;
}
</style>