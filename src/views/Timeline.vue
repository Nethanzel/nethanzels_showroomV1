<template>
  <div class="timeline">
    <headeR />
    <div>
      <h1>Nethanzêl's timeline.</h1>

        <div class="event_ last">
            <div>
                <img src="../assets/achievement/milestone.png" class="ach_icon">
                <h2>Title for this event</h2>
                <p>
                    Description for this event
                </p>

                <p class="ev_date">
                    Date of this event goes here
                </p>
            </div>
        </div>
        
        <div class="event_">
            <div>
                <img src="../assets/achievement/milestone.png" class="ach_icon">
                <h2>Title for this event</h2>
                <p>
                    Description for this event
                </p>

                <p class="ev_date">
                    Date of this event goes here
                </p>
            </div>
        </div>

        <div class="event">
            <div>
                <img src="../assets/achievement/milestone.png" class="ach_icon">
                <h2>Title for this event</h2>
                <p>
                    Description for this event
                </p>

                <p class="ev_date">
                    Date of this event goes here
                </p>
            </div>
        </div>

        <div class="event_ first">
            <div>
                <img src="../assets/achievement/milestone.png" class="ach_icon">
                <h2>Title for this event</h2>
                <p>
                    Description for this event
                </p>

                <p class="ev_date">
                    Date of this event goes here
                </p>
            </div>
        </div>

    </div>
  </div>
</template>

<script>
import headeR from '@/components/navegationMenu.vue'

export default {
  name: "Timeline",
  title: "Nethanzêl Showroom",
  components: {
    headeR
  }
}
</script>

<style scoped lang="scss">

.timeline {
  mix-blend-mode: difference;
  will-change: opacity;
  padding-top: 80px;
  height: auto;
}

h1 {
  letter-spacing: 3px;
  position: fixed;
  padding-top: 60px;
  text-align: center;
  width: 100%;
  background: #000;
  top: 0;
  cursor: default;
  max-width: 1366px;
  margin: 0 auto;
}

h2 {
  font-size: 35px;
  letter-spacing: 2px;
}

.event {
    padding: none;
    background-image: url("../assets/timelinebg_.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 98vw;

    max-width: 1366px;
    margin: 0 auto;
}

.event_ {
    padding: none;
    background-image: url("../assets/timelinebg.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 98vw;

    max-width: 1366px;
    margin: 0 auto;
}

.last {
    background-image: url("../assets/timelinebg_last.png");
}

.first {
    background-image: url("../assets/timelinebg_first.png");
}

.event div {
    position: relative;
    background: #99999944;
    height: 568px;
    width: 568px;
    border-radius: 50%;
    left: -3px;
    top: -4px;
    margin: 110px 0;
    z-index: -1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.event_ div {
    position: relative;
    background: #99999944;
    height: 568px;
    width: 568px;
    border-radius: 50%;
    left: -3px;
    top: -4px;
    margin: 110px 0;
    z-index: -1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.event p {
    margin-top: 10px;
}

.event_ p {
    margin-top: 10px;
}

.ach_icon {
    background: #fff;
    height: 180px;
    border-radius: 50%;
    margin-top: 20px;
    margin-bottom: 15px;
    object-fit: cover;
}

.ev_date {
    font-style: italic;
}

@media screen and (max-width: 780px) {
    .timeline {
        mix-blend-mode: difference;
        will-change: opacity;
        padding-top: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
    }

    h1 {
        letter-spacing: 3px;
        position: fixed;
        padding-top: 0px;
        text-align: center;
        width: 100%;
        background: #000;
        top: 0;
        cursor: default;
    }

    
    h2 {
        font-size: 28px;
        letter-spacing: 2px;
    }

    .event {
        padding: none;
        background-image: url("../assets/timelinebg_.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
     }

    .event_ {
        padding: none;
        background-image: url("../assets/timelinebg.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
    }

    .last {
        background-image: url("../assets/timelinebg_last.png");
    }

    .first {
        background-image: url("../assets/timelinebg_first.png");
    }

    .event div {
        position: relative;
        background: #99999944;
        height: 428px;
        width: 428px;
        border-radius: 50%;
        left: -3px;
        top: -4px;
        margin: 80px 0;
        z-index: -1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .event_ div {
        position: relative;
        background: #99999944;
        height: 428px;
        width: 428px;
        border-radius: 50%;
        left: -3px;
        top: -4px;
        margin: 80px 0;
        z-index: -1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

}

@media screen and (max-width: 590px) {
    .timeline {
        mix-blend-mode: difference;
        will-change: opacity;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
    }

    h1 {
        letter-spacing: 3px;
        position: fixed;
        padding-top: 0px;
        text-align: center;
        width: 100%;
        background: #000;
        top: 0;
        cursor: default;
    }

    
    h2 {
        font-size: 28px;
        letter-spacing: 2px;
    }

    .event {
        padding: none;
        background-image: url("../assets/timelinebg_.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vw;
     }

    .event_ {
        padding: none;
        background-image: url("../assets/timelinebg.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vw;
    }

    .last {
        background-image: url("../assets/timelinebg_last.png");
    }

    .first {
        background-image: url("../assets/timelinebg_first.png");
    }

    .event div {
        position: relative;
        background: #99999944;
        height: 72%;
        width: 73%;
        border-radius: 50%;
        left: -3px;
        top: -4px;
        margin: 38px 0;
        z-index: -1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .event_ div {
        position: relative;
        background: #99999944;
        height: 72%;
        width: 73%;
        border-radius: 50%;
        left: -3px;
        top: -4px;
        margin: 38px 0;
        z-index: -1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

    .event p {
        margin-top: 5px;
    }

    .event_ p {
        margin-top: 5px;
    }

    .ach_icon {
        background: #fff;
        height: 130px;
        border-radius: 50%;
        margin-top: 0px;
        margin-bottom: 5px;
        object-fit: cover;
    }

    .ev_date {
        font-style: italic;
    }

}

@media screen and (max-width: 460px) {

    h1 {
        letter-spacing: 3px;
        position: fixed;
        padding-top: 0px;
        text-align: center;
        width: 100%;
        background: #000;
        top: 0;
        cursor: default;
        font-size: 39px;
    }

    .event p {
        margin-top: 5px;
        font-size: 13px;
    }

    .event_ p {
        margin-top: 5px;
        font-size: 13px;
    }

    .ach_icon {
        background: #fff;
        height: 130px;
        border-radius: 50%;
        margin-top: 0px;
        margin-bottom: 5px;
        object-fit: cover;
    }

    .ev_date {
        font-style: italic;
    }

    h2 {
        font-size: 24px;
        letter-spacing: 2px;
    }
}

@media screen and (max-width: 400px) {

    h1 {
        letter-spacing: 3px;
        position: fixed;
        padding-top: 0px;
        text-align: center;
        width: 100%;
        background: #000;
        top: 0;
        cursor: default;
        font-size: 32px;
    }

    .event p {
        margin-top: 3px;
        font-size: 12px;
    }

    .event_ p {
        margin-top: 3px;
        font-size: 12px;
    }

    .ach_icon {
        background: #fff;
        height: 120px;
        border-radius: 50%;
        margin-top: 0px;
        margin-bottom: 3px;
        object-fit: cover;
    }

    .ev_date {
        font-style: italic;
    }

    h2 {
        font-size: 22px;
        letter-spacing: 2px;
    }
}

@media screen and (max-width: 425px) {
  h1 {
    margin-bottom: 25px;
    cursor: default;
    position: fixed;
    padding-top: 0px;
    text-align: center;
    width: 100%;
    background: #000;
    top: 0;
    letter-spacing: 3px;
    font-size: 36px;
  }
}

@media screen and (max-width: 400px) {
  h1 {
    margin-bottom: 25px;
    cursor: default;
    position: fixed;
    padding-top: 0px;
    text-align: center;
    width: 100%;
    background: #000;
    top: 0;
    letter-spacing: 3px;
    font-size: 34px;
  }
}

@media screen and (max-width: 380px) {
  h1 {
    margin-bottom: 25px;
    cursor: default;
    position: fixed;
    padding-top: 0px;
    text-align: center;
    width: 100%;
    background: #000;
    top: 0;
    letter-spacing: 3px;
    font-size: 31.5px;
  }
}

</style>