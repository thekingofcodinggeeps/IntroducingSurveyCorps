var images = ["https://cdn.tuftsdaily.com/2021/04/Screen-Shot-2021-04-19-at-6-731x1024.jpg", "https://i.quotev.com/img/q/u/17/5/19/4u3tdo2c7m_l.jpg" , "https://animeaudiolog.files.wordpress.com/2013/04/shingeki-no-kyojin-sasha-bread-attack.jpg", "https://quotetheanime.com/wp-content/uploads/2020/12/meme-41-1024x1024.jpg", "https://funnylax.com/media/memes/783a058308b14267/eren-you-killed-innocents-you-killed-children-memes-27f3821839bf2882-971be2967155f021.jpg", "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/07/Attack-on-Titan-Hange-with-Sawney.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5", "https://i.pinimg.com/564x/c1/d6/af/c1d6af9f1d6e6c1b6f3294b3142e7884.jpg", "https://i.pinimg.com/474x/57/8a/2f/578a2fe5415414d79143968258e43c55.jpg", "https://i.kym-cdn.com/photos/images/masonry/001/129/399/529.gif"];
var names = ["Introducing, The Survey Corps", "Levi(The Cleaner)", "Sasha(The Food Monster)", "Mikasa(The Eren Simp)", "Eren(Kinda, More like the survey corps' titan shifter and enemy)", "Hange(Just being Hange, The titan enthusiast)", "Jean(The Horseface)", "Connie(Baldi)", "Armin(I don't even know)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 9
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    
    var updatedImage = images[i];
    
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}