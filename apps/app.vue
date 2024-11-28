<template>
    <div id ="appDiv">
        <navbar :titleLogo="titleLogo"
                :slots="slots"
                color="#fc513c"
                navBackgroundColor="#181818"
        /> 

        <hero3D title1="Introducing" 
                titleSpan="Pyreciuk"
                :buttonAttributes="buttonAttributes"
                imageUrl="'../imgs/Pyreciuk/pyreciuk-banner.png'"
        />

        <cardTexted title="Pyreciuk's Evolution Line"
                    text="To evolve into Pyreciuk, Flarlin must reach level 30 after battling alongside or against known aggressive Pokémon like Incineroar, 
                        Zoroark, or Houndoom. The intense exposure to their fiery or dark energy influences Flarlin, igniting its latent potential. 
                        This transformation allows Flarlin to become a fierce of strength and resolve, embodying a balance between wild aggression and attack-enjoyment."
                    :cardImgs="cardImgs"
                    :cardTexts= "cardText"
                    :cardColors="cardColors"
                    reverse="true"
                    :moveCard="true"
                    id="evolutionLine"
        /> 

        <textChunk
            title="What is Pyreciuk?"
            text="Pyreciuk is the Fire-Dark's Flarlin evolution Pokémon known as the Infernal Beast species. It thrives in shadowy volcanic regions or dense 
                    forests, its midnight blue fur ignites with vibrant orange and violet flames that ripple across its back.  
                    <br><br>
                    Revered for its fieracy, Pyreciuk uses sharp instincts to burst itself. Legends say it channels the aggressive energy of powerful
                    attacker Pokémon. Known for its agressivity and agility, Pyreciuk's blazing spines are said 
                    to illuminate even the darkest paths."
            :icons="icons2"
            :reverse="true"
            textChunkImage="../imgs/Pyreciuk/pyreciuk-entry.png"
            textChunkBg="'./imgs/extraIcons/fire-opacity.png'"
            id="pokedexEntry"
        /> 
        
        <statsBar
            :statsBarTitle="pokemon.name"
            :stats="pokemon.stats"
            :statsBarImage="pokemon.image"
            :abilities="pokemon.abilities"
            :icons="pokemon.iconTypes"
            :barColor="pokemon.barColor"
            :maxValue="pokemon.maxValue"
            :backgroundColor="pokemon.backgroundColor"
        />

        <cards3D :items="slides" 
                :hoverColor="'#e4613e'"
                titleLogo="Gallery"
                :sidePopUpContent="sidePopUpContent"
                id="gallery"
        />

        <textChunk
            title="Pyreciuk in Battle?"
            text="Pyreciuk excels as a physical attacker, leveraging its <strong>Sharp Instincts</strong> ability to boost the effectiveness of moves 
                like <strong>Shadow Claw</strong>, while <strong>Blaze</strong> amplifies its Fire-type attacks in critical moments. 
                <strong>Flare Blitz</strong> and <strong>Dragon Claw</strong> offer strong STAB options.
                <br><br>
                It can pressure opponents with <strong>Swords Dance</strong>, turning it into a devastating sweeper. In doubles, Pyreciuk pairs well with support
                Pokémon, capitalizing on redirection or status effects to dominate the battlefield. It’s an agile and offensive presence in any team."
            textChunkBg="'./imgs/extraIcons/dark-opacity.png'"
            textChunkImage="./imgs/Pyreciuk/pyreciuk-competitive.png"
            id="competitive"
        />

        <simpleFooter :footerColors="simpleFooterContent[0]"
                        :footerIcons="simpleFooterContent[1]"
                        :footerText="simpleFooterContent[2]"/>
    </div>
</template>

<script>
    import navbar from './navbar1.vue';
    import hero3D from './Hero3D.vue';
    import textChunk from './textChunk.vue';
    import cardTexted from './cardTexted.vue';
    import cards3D from './cardsSHIP.vue';
    import simpleFooter from './simpleFooter.vue';
    import statsBar from './statsBar.vue';

    export default {
        name: 'App',

        components: {
            navbar,
            hero3D,
            textChunk,
            cardTexted,
            cards3D,
            simpleFooter,
            statsBar
        },

        data() {
            return {
                titleLogo: ["Pyreciuk", "#"],
                slots: [
                    {text: "Evo. Line", link: "#evolutionLine"},
                    {text: "Pokedex Entry", link: "#pokedexEntry"},
                    {text: "Gallery", link: "#gallery"},
                    {text: "Competitive", link: "#competitive"},
                ],
                buttonAttributes: {
                    text: "Get Started",
                    hoverColor: "#fc513c",
                    backgroundColor: "#272727",
                    link: "#evolutionLine"
                },
                cardImgs: [
                    "./imgs/Pyreciuk/flarlin.png",
                    "./imgs/Pyreciuk/pyreciuk-line.png",
                ],
                cardText: ["Flarlin", "Pyreciuk"],
                cardColors: ["#383838", "#fc513c"],
                icons2: [
                    { icon: "./imgs/extraIcons/weight.svg", iconSpan: "75 kg" },
                    { icon: "./imgs/extraIcons/height.svg", iconSpan: "1.70 m" },
                    { icon: "./imgs/extraIcons/gender.svg", iconSpan: "1.5 : 1" },
                ],
                slides: [
                    {src: "../imgs/Pyreciuk/pyreciuk-card2.png"},
                    {src: "../imgs/Pyreciuk/pyreciuk-card1.png"},
                    {src: "../imgs/Pyreciuk/pyreciuk-card3.png"},
                ],

                pokemon: {
                    name: 'Pyreciuk',
                    stats: [
                        { name: 'HP', value: 55 },
                        { name: 'Attack', value: 135 },
                        { name: 'Defense', value: 70 },
                        { name: 'Sp. Attack', value: 120 },
                        { name: 'Sp. Defense', value: 70 },
                        { name: 'Speed', value: 135, },
                    ],
                    image: '../imgs/Pyreciuk/pyreciuk-stats.png',
                    abilities: [
                        { name: 'Blaze', description: 'When the Pokémon’s HP is below 1/3, its Fire-type moves deal 50% more damage.' },
                        { name: 'Sharp Instincts', description: 'Boosts the critical hit ratio of moves when battling Pokémon with a higher base Attack stat.' },
                    ],
                    iconTypes: [
                        { icon: "./imgs/Icons/fire.svg", iconSpan: "Fire", shadowColor: "#e4613e", iconBorderRadius: true },
                        { icon: "./imgs/Icons/dark.svg", iconSpan: "Dark", shadowColor: "#000", iconBorderRadius: true },
                    ],
                    barColor: "linear-gradient(135deg, rgba(236, 0, 140, 1)0%, rgba(252, 103, 103, 1)100%)",
                    maxValue: 255,
                    backgroundColor: "#181818",
                },
                
                sidePopUpContent : [
                    "Other Pokémon Pyreciuk is influenced by include Gengar, Grimmsnarl, Hydreigon, Tyranitar, and Mightyena, all known for their aggressive or sinister reputations in battle.",
                    ['./imgs/Icons/fire.svg', 'Pyreciuk is also influenced by Gengar!'],
                    "60%",
                    '2.5em'
                ],
                simpleFooterContent: [
                    ["#373737", "#e4613e"],
                    [   {icon: "youtube", link: "https://www.youtube.com/@CipherosX/featured"},
                        {icon: "instagram", link: "https://www.instagram.com/cipherosx/"},
                        {icon:"github", link: "https://github.com/FabrizzioMachado"},
                        {icon: "medium", link: "https://medium.com/@fabrizziomachado10"}
                    ],
                    "2024 Pyreciuk. All rights reserved.",
                ]
            }
        }
    }
</script>

<style lang="scss">
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body{
        overflow-x: hidden;
        overflow-y: scroll; 
        background: #383838;        

    }
    #appDiv{
        width: 100%;
        height: 100vh;
        margin: 0 auto;
        background: #383838;        
    }
</style>