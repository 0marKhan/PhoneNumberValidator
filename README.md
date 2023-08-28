# PhoneNumValid, a website that lets you validate phone numbers

## uses Veriphone API from the RapidAPI website to validate phone numbers, store and delete them, and search through saved numbers

This website gives information like the phone carrier, international number format, local number format, the country the number is from, the ES6 format, the country code and the phone type. The website was made using these steps

<p align="center">
    <img src="./home_screen.png" alt="website image" width="1347"  border="10"/>
</p>

- fetching data from the veriphone API after registering on the site
- making the API call when a phone number is entered to verify
- the data of the phone is extracted from the API and displayed, as well as a button that lets you store the number in the firebase database using axios

<p align="center">
    <img src="./number_data.png" alt="website image" width="1347"  border="10"/>
</p>

- a button is added to take you to the page that has all the stored numbers

<p align="center">
    <img src="./saved_numbers.png" alt="website image" width="1347"  border="10"/>
</p>
  
- to filter through the numbers in the database a search option is made with input fields that let you filter accordingly
- they can also be deleted using the delete button with each number 






## Click in the link to watch a video tutorial of the website!
[website tutorial](https://youtu.be/ks91pz3tJf0?si=Dx0dhKz28sT1jjr3)


