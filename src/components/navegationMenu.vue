<template>
  <div id="nav">
   
    <router-link to="/">
        <img  src="../assets/logo.svg" alt="logo" id="logo" class="link" >
    </router-link>

    <div class="navOptions" id="deskMenu">
        <router-link to="/about">
            <p>About</p>
        </router-link>

        <router-link to="/projects">
            <p>Projects</p>
        </router-link>

        <router-link to="/skills">
            <p>Skills</p>
        </router-link>

        <router-link to="/timeline">
            <p>Timeline</p>
        </router-link>

        <router-link to="/contact">
            <p>Contact</p>
        </router-link>
    </div>

     <div class="navOptions" id="mobMenu">
        <router-link to="/about">
            <div class="icon-holder">
				<div class="icon"> 
					<i class="icofont-user-alt-4"></i>
				</div> 
			</div>
        </router-link>

        <router-link to="/projects">
            <div class="icon-holder">
				<div class="icon"> 
					<i class="icofont-bag-alt"></i>
				</div> 
			</div>
        </router-link>

        <router-link to="/skills">
            <div class="icon-holder">
				<div class="icon"> 
					<i class="icofont-muscle"></i>
				</div> 
			</div>
        </router-link>

        <router-link to="/timeline">
            <div class="icon-holder">
				<div class="icon"> 
					<i class="icofont-connection"></i>
				</div> 
			</div>
        </router-link>

        <router-link to="/contact">
            <div class="icon-holder">
				<div class="icon"> 
					<i class="icofont-envelope"></i>
				</div> 
			</div>
        </router-link>
    </div>

  </div>
</template>

<style scoped lang="scss">

#nav {
    z-index: 99999;
    top: 0;
    left: 0;
    position: fixed;
    height: 50px;
    width: 100vw;

    display: flex;

    background: #000;
    transition: .8s;
}

.navOptions {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    justify-self: flex-start;
}

p {
    padding: 3px 15px;
    transition: .5s;
}

p:hover {
    background: #fff;
    color: rgb(99, 99, 99);
    cursor: pointer;
    transition: .3s;

}

a {
    text-decoration: none;
    margin-right: 10px;
    padding: 3px 15px;
    cursor: default;
    transition: .5s;
}
.router-link-exact-active p {
    font-weight: bold;
    border: 1px solid #fff;
}

#logo {
    height: 30px;
    position: absolute;
    top: 10px;
    left: 8px;
    cursor: pointer;
}

#mobMenu {
    display: none;
}

#deskMenu {
    display: flex;
}

.icon {
    font-size: 26px;
}

@media screen and (max-width: 900px) {

    #nav {
        z-index: 99999;
        top: 0;
        left: 0;
        position: fixed;
        height: 50px;
        width: 100vw;

        display: flex;

        background: #000;
        transition: .8s;
    }

    .navOptions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 80%;
        margin-left: 120px;
    }

    #mobMenu {
        display: none;
    }

    #deskMenu {
        display: flex;
    }
}

@media screen and (max-width: 810px) {

    #nav {
        z-index: 99999;
        top: 0;
        left: 0;
        position: fixed;
        height: 50px;
        width: 100vw;

        display: flex;

        background: #000;
        transition: .8s;
    }

    .navOptions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 85%;
        margin-left: 110px;
    }

    #mobMenu {
        display: none;
    }

    #deskMenu {
        display: flex;
    }
}

@media screen and (max-width: 770px) {

    #nav {
        top: calc(100vh - 50px);
        left: 0;
        position: fixed;
        width: 99.5vw;
        height: 50px;
        
        display: flex;
        align-items: center;
        justify-content: center;

        background: #000;
        transition: .8s;
    }

    .navOptions {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 5%;
        width: 100%;
    }

    .icon-holder {
        width: 35px;
    }

    .icon-holder:active {
        background: #fff;
        color: rgb(99, 99, 99);
        cursor: pointer;
        transition: .3s;
    }

    .router-link-exact-active .icon-holder {
        border: 1px solid #fff;
    }

    #logo {
        left: 2px;
        top: 13px;
        height: 25px;
        cursor: pointer;
    }

    #deskMenu {
        display: none;
    }

    #mobMenu {
        display: flex;
    }
}


@media screen and (max-width: 550px) {

    #nav {
        top: calc(100vh - 50px);
        left: 0;
        position: fixed;
        width: 99.5vw;
        height: 50px;
        
        display: flex;
        align-items: center;
        justify-content: center;

        background: #000;
        transition: .8s;
    }

    .navOptions {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 13%;
        width: 100%;
    }

    a {
        text-decoration: none;
        margin-right: 0;
        padding: 0px 5%;
        cursor: default;
        transition: .5s;
    }

    .icon-holder {
        width: 35px;
    }

    .icon-holder:active {
        background: #fff;
        color: rgb(99, 99, 99);
        cursor: pointer;
        transition: .3s;
    }

    .router-link-exact-active .icon-holder {
        border: 1px solid #fff;
    }

    #logo {
        left: 2px;
        top: 12px;
        height: 25px;
        cursor: pointer;
    }

    #deskMenu {
        display: none;
    }

    #mobMenu {
        display: flex;
    }
}


@media screen and (max-width: 515px) {

    #nav {
        position: fixed;
        top: calc(100vh - 45px);
        left: 0px;
        width: 99.5vw;
        height: 45px;

        display: flex;
        align-items: center;
        justify-content: center;

        background: #000;
        transition: .8s;
    }

    .navOptions {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 20%;
        width: 100%;
    }

    a {
        text-decoration: none;
        margin-right: 0;
        padding: 0px 5%;
        cursor: default;
        transition: .5s;
    }

    .icon-holder {
        width: 35px;
    }

    .icon-holder:active {
        background: #fff;
        color: rgb(99, 99, 99);
        cursor: pointer;
        transition: .3s;
    }

    .router-link-exact-active .icon-holder {
        border: 1px solid #fff;
    }

    #logo {
        left: 2px;
        top: 12px;
        height: 20px;
        cursor: pointer;
    }

    #deskMenu {
        display: none;
    }

    #mobMenu {
        display: flex;
    }
}

@media screen and (max-width: 410px) {

    #nav {
        position: fixed;
        top: calc(100vh - 45px);
        left: 0px;
        width: 99.5vw;
        height: 45px;

        display: flex;
        align-items: center;
        justify-content: center;

        background: #000;
        transition: .8s;
    }

    .navOptions {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 20%;
        width: 100%;
    }

    a {
        text-decoration: none;
        margin-right: 0;
        padding: 0px 10px;
        cursor: default;
        transition: .5s;
    }
    .icon-holder {
        width: 35px;
    }

    .icon-holder:active {
        background: #fff;
        color: rgb(99, 99, 99);
        cursor: pointer;
        transition: .3s;
    }

    .router-link-exact-active .icon-holder {
        border: 1px solid #fff;
    }

    #logo {
        left: 2px;
        top: 12px;
        height: 20px;
        cursor: pointer;
    }

    #deskMenu {
        display: none;
    }

    #mobMenu {
        display: flex;
    }
}

@media screen and (max-width: 370px) {

    #nav {
        position: fixed;
        top: calc(100vh - 50px);
        left: 0px;
        width: 99.5vw;
        height: 50px;

        display: flex;
        align-items: center;
        justify-content: center;

        background: #000;
        transition: .8s;
    }

    .navOptions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-left: 20%;
        width: 100%;
    }

    a {
        text-decoration: none;
        margin-right: 0;
        padding: 0px 8px;
        cursor: default;
        transition: .5s;
    }
    .icon-holder {
        width: 35px;
    }

    .icon-holder:active {
        background: #fff;
        color: rgb(99, 99, 99);
        cursor: pointer;
        transition: .3s;
    }

    .router-link-exact-active .icon-holder {
        border: 1px solid #fff;
    }

    #logo {
        left: 2px;
        top: 15px;
        height: 20px;
        cursor: pointer;
    }

    #deskMenu {
        display: none;
    }

    #mobMenu {
        display: flex;
    }


}

</style>