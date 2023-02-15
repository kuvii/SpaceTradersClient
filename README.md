# SpaceTraders Client

The main goal of this work, is to create a react native client, using [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/)  
There will be only one user, as we haven't work on multiuser systems, even so, I've tried to do, but failed, that's the actuall reason behind that.  

### Screens Structure

(If there's no token)   

+ [Login](https://github.com/kuvii/SpaceTradersClient/new/main?readme=1#login)
+ [Register](https://github.com/kuvii/SpaceTradersClient/new/main?readme=1#register)

(If there's a token registered)

+ [Home](https://github.com/kuvii/SpaceTradersClient/new/main?readme=1#home)
+ [Loans](https://github.com/kuvii/SpaceTradersClient/new/main?readme=1#loans)
+ [Ships](https://github.com/kuvii/SpaceTradersClient/new/main?readme=1#ships)

<hr/>  

# Login
  First time app is executed this screen will show, login works for those users that already has an account, they will have to insert their token into the input, 
  if valid, they will go to Home screen
# Register
  In case a user doesn't have an account they can register using this screen, if the user they select is invalid, a message will pop up 2 sec and then disappear
# Home
  Once a user is logged correctly, this screen will be showed, here the user can see its main resources as well as logout, from here the user can go to the rest of the 
  screens
# Loans
  On this screen the user can see the available loans, and take out one in case of haven't done it one already
# Ships 
  This screen lists the OE system available ships, each one of them shows its type, speed, weapons and cargo
# Resources
  - [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/)
  - [ship images](https://opengameart.org/art-search-advanced?field_art_tags_tid=spaceship&page=2)
  - [slime avatars](https://www.freepik.es/vector-gratis/set-limos-monstruosos_12953051.htm#query=smile%20aliens%20avatars&position=6&from_view=search&track=ais)
