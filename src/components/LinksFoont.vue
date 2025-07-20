<template lang="pug">
main(class="flex-grow")
 div(class=" grid grid-cols-12 p-8 text-start ")
  div(class="col-span-12 lg:col-span-4 md:col-span-6 text-start ")
   h1(class="text-5xl font-extrabold text-black") SHOP.CO
   p(class="text-gray-500 mt-4") We have clothes that suits your style and which you’re proud to wear. From women to men.
   div(class="flex justify-start gap-10 items-center mt-4 ")
    font-awesome-icon(:icon="['fab', 'facebook']" class="text-3xl  text-black   rounded-md hover:bg-black hover:text-gray-300 duration-500 ")
    font-awesome-icon(:icon="['fab', 'twitter']" class="text-3xl text-black    rounded-md hover:bg-black hover:text-gray-300 duration-500")
    font-awesome-icon(:icon="['fab', 'instagram']" class="text-3xl  text-black    rounded-md hover:bg-black hover:text-gray-300 duration-500")
  div(class="col-span-12 lg:col-span-8  md:col-span-6" )
   div(class="flex justfiy-start   gap-28 w-full mt-10 flex-wrap")
     div(class=" font-semibold ")
       h3(class="text-black") COMPANY
       p(class="text-gray-500 mt-5 text-[15px]") About  
       p(class="text-gray-500 mt-1 text-[15px]") Features          
       p(class="text-gray-500 mt-1 text-[15px]") Works
       p(class="text-gray-500 mt-1 text-[15px]") Career
       
     div(class=" font-semibold ")
       h3(class="text-black") HELP
       p(class="text-gray-500 mt-5 text-[15px]") Delivery Details  
       p(class="text-gray-500 mt-1 text-[15px]") Terms & Conditions          
       p(class="text-gray-500 mt-1 text-[15px]") Privacy Policy
       p(class="text-gray-500 mt-1 text-[15px]") Customer Support
       
     div(class=" font-semibold ")
       h3(class="text-black") FAQ
       p(class="text-gray-500 mt-5 text-[15px]") Account  
       p(class="text-gray-500 mt-1 text-[15px]") Manage Deliveries          
       p(class="text-gray-500 mt-1 text-[15px]") Orders
       p(class="text-gray-500 mt-1 text-[15px]") Payment
     div(class=" font-semibold ")
       h3(class="text-black") RESOURCES
       p(class="text-gray-500 mt-5 text-[15px]") Free eBook  
       p(class="text-gray-500 mt-1 text-[15px]") Development Tutorial          
       p(class="text-gray-500 mt-1 text-[15px]") How to - Blog
       p(class="text-gray-500 mt-1 text-[15px]") Youtube Playlist
</template>
