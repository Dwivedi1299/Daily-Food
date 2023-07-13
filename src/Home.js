import React from 'react'
import 'animate.css';
import './index.css';
import Cart from './Cart';
import PolDish from './PolDish';
import Detail from './Detail';
import Sweet from './Sweet';
import Footer from './Footer';

<script src="https://cdn.tailwindcss.com"></script>



export default function Home() {
  const  imagepath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsXcY2I3iJFdgQ1b-khb6cXKmh5MjE_XHuxC8fQnLKFAUrWKEx-szN8EEtu7TGb2YBTCE&usqp=CAU"
  const imagepath1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRcJ-qsODWKlyEt-jJVV59_GR1NPmD2uopC-d9HILXu2oqkEQBuh_eQlaBT-PX2HYlY9U&usqp=CAU";
  const imagepath2="https://images.herzindagi.info/image/2018/Aug/chow-mein-health-main.jpg";
  const imagepath3="https://static.toiimg.com/thumb/83740315.cms?width=1200&height=900";
  const imagepath4="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=481&q=80";
  const imagepath5="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFQeHyaEzar3WXexkJJXYKWHkmcBTeeCbXnNnhcstD_AOxQ61NOd4koSF0Yj1dKlY1Q0&usqp=CAU";
  const imagepath6="https://www.chefkunalkapur.com/wp-content/uploads/2021/05/Veg-spring-rolls-1300x867.jpg?v=1620580103";
  const imagepath7="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5jRbrTsfwobABxW5F9-QBXrrPWiU7tnZ3z8r0zQwldQEZ6s5PLMGg71KAF8gqHK1cWYU&usqp=CAU";

////image 
const image1="https://i0.wp.com/anufoodclub.com/wp-content/uploads/2021/05/chow-mein.jpg";
const image2="https://i1.wp.com/www.bharatzkitchen.com/wp-content/uploads/2017/05/IMG_7126.jpg?resize=575%2C262&ssl=1";
const image3="https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg";
const image4="https://www.vegrecipesofindia.com/wp-content/uploads/2018/12/golgappa-pani-recipe-1a.jpg";
const image5="https://www.simplyrecipes.com/thmb/_btPJk4Y7vuKOIc1iI3nYpy-yfA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1b-ea13798d224048b3a28afb0936c9b645.jpg";

///

///Sweet image
const sweet="https://static.toiimg.com/thumb/55048826.cms?imgsize=392932&width=800&height=800";
//Kaju katli
const sweet1="https://images.news18.com/ibnkhabar/uploads/2021/08/Gulab-jamun-final.jpg?im=FitAndFill,width=1200,height=1200";
//Gulab Jamun
const sweet2="https://pulses.org/images/com_yoorecipe/imarti.jpg";
//Imarti
const sweet3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfi78BVu6FCxzrixGkI90S1l_O0lKKZXhfh3PI3tEfGQo7NB8HCjb2ti2VLSRTDyr7xE&usqp=CAU";
//RasGulla
const sweet4="https://www.scrumptiously.com/wp-content/uploads/2023/01/RasmalaiMilkPowder.webp";
//RasMalai
const sweet5="https://www.jansatta.com/wp-content/uploads/2022/08/Modak.jpg";
//Modak
const sweet6="https://www.nestleprofessional.in/sites/default/files/2022-07/Kalakand.jpg";
//Kalakand
const sweet7="https://media.istockphoto.com/id/1337187550/photo/motichur-laddu-made-from-besan-special-festival-indain-sweets.jpg?s=612x612&w=0&k=20&c=3O8cZdiUS0whkJuKGiUTllrvYc0Pj_Pj6EPar6jVjOk=";
//Ladoo
const sweet8="https://www.indianhealthyrecipes.com/wp-content/uploads/2012/11/chum-chum-recipe1.jpg.webp";
//Cham Cham
//
//
const KajuKatli="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/kaju-katli.jpg";
const GulabJamun="https://s.navarashtra.com/wp-content/uploads/2022/03/Untitled-38-764x430.jpg";
const Imarti="https://www.merisaheli.com/wp-content/uploads/2019/03/imarati_19806826.jpg";
const Ladoo="https://im.indiatimes.in/content/2022/Mar/ladoo1_621e33b0689da.jpg";
const Modak="https://images.healthshots.com/healthshots/hi/uploads/2022/08/23222653/Modak-recipe-1600x900.jpg";



//

  return (
    <> 
    <div class=" bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-70% to-emerald-500 to-90% w-auto  h-[550vh] ">
      <br/>
    <nav class=  "bg-orange-400    h-20 w-auto ml-10 mr-10 rounded-3xl "> <h1 class="mx-32 py-4 text-4xl font-light fill-orange-950 font-serif animate__animated animate__jello" > Daily Recipe </h1>  </nav>
    <div class="flex mx-14"> 
    <Cart name="Burgur"  image={imagepath}/>
    <Cart name="Momos" image={imagepath1}/>
    <Cart name="Chaumin" image={imagepath2}/>
    <Cart name="Sandwich" image={imagepath3}/>
    <Cart name="Pizza" image={imagepath4}/>
    <Cart name="Dosa" image={imagepath5}/>
    <Cart name="Veg Role" image={imagepath6}/>
    <Cart name="GolGappe" image={imagepath7}/>
       </div>
       <h1 class="ml-72 text-5xl border-b-2  border-pink-500  border-b-[6px]  w-32 mb-4 mt-2 font-mono text-amber-500">Popular Dish</h1>
       <div class="ml-56 border-2 h-[200vh] w-2/3 rounded-s-3xl bg-slate-900">
   
       <PolDish name="Chaumin" about="Chaomian was introduced from China into the United States by Chinese immigrants who came from the Guangdong provinces in the California 1849 Gold Rush era bringing with them their Cantonese style of cooking"  pic={image1}  />

       <PolDish name="Maggi" about="In 1869, Julius Maggitook over his father's mill business in Kemptthal, Switzerland. Julius Maggi experimented for two years with different methods of mechanical and chemical processing of legumes and different mixtures" pic={image2}  />
       <PolDish name="Samosa" about="The earliest mention of a samosa precursor was by Abbasid-era poet Ishaq al-Mawsili, praising the sanbusaj. Recipes are found in 10th–13th-century Arab cookery books, under the names sanbusak, sanbusaq, and sanbusaj," pic={image3}/>
       <PolDish name="Panipuri" about="On 10 March 2005, pani puri was added to the Oxford English Dictionary. Chaat is considered the predecessor of pani puri/ gol gappa In Maharashtra, it is known as Pani Puri; Haryana it is known as paani patashi; in Madhya Pradesh fulki;" pic={image4} />
       <PolDish name="Pizza" about="Foods similar to pizza have been made since the Neolithic Age.[22] Records of people adding other ingredients to bread to make it more flavorful can be found throughout ancient history. In the 6th century BC." pic={image5} />
          </div>

       <div class="flex ml-8 mt-12">
       <Detail sweetpic={sweet} name="KajuKatli"/>
       <Detail sweetpic={sweet1} name="Gulabamun"/>
       <Detail sweetpic={sweet2} name="Imarti"/>
       <Detail sweetpic={sweet3} name="Ras Gulla"/>
       <Detail sweetpic={sweet4} name="Ras Malai"/>
       <Detail sweetpic={sweet5} name="Modak"/>
       <Detail sweetpic={sweet6} name="Kala Kand"/>
       <Detail sweetpic={sweet7} name="Ladoo"/>

       </div>

       <div class="ml-56 mt-20 border-2 h-[200vh] w-2/3 rounded-s-3xl bg-slate-900">
<Sweet name="KajuKatri" about="The dish is prepared with cashew nuts soaked in water for a considerable period of time (usually overnight), which are then ground to a paste it also known as kaju barfi, is an Indian dessert similar to a barfi" image={KajuKatli}/>
<Sweet name="GulabJamun " about="Gulab jamun (also spelled gulaab jamun; lit.  is a sweet confectionery or dessert, originating in Persia and then later introduced to the Indian subcontinent. It is popular in Pakistan, India, as well as Myanmar." image={GulabJamun}/>
<Sweet name="Imarti" about="Imarti is a sweet from India.[1] It is made by deep-frying vigna mungo flour batter in a circular flower shape, then soaking in sugar syrup. Alternative names include Amitti, Amriti, Emarti, Omritti, Jahangir and Jhangiri/Jaangiri.  " image={Imarti}/>
<Sweet name="Ladoo" about="Laddu or laddoo is a spherical sweet from the Indian subcontinent made of various ingredients and sugar syrup or jaggery. It has been described as perhaps the most universal and ancient of Indian sweets." image={Ladoo} / >
<Sweet name="Modak" about="Modak is considered to be the favourite sweet of the Hindu deity, Ganesha.[2] From it, he gets the moniker modakapriya (one who likes modak) in Sanskrit. The word modak means small part of bliss and it symbolises spiritual knowledge." image={Modak}/>


</div>
{/* <Footer/> */}
    </div>
    </>
  )
}
