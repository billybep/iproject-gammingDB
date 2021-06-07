**iProject-F2 gammingDB ROUTES**
-----
API Games : `https://api-docs.igdb.com/` <br />
NodeMailer <br />

**Deploy Link** : <br />
* **link server** : `https://gamming-db.herokuapp.com/` <br />
* **link client** : `https://gammingdb-a9b9c.web.app`<br />

**iProject-F2 gammingDB ROUTES**
- POST    `/users/signup`
- POST    `/users/signin`
- POST    `/googleLogin`

- GET     `/games`
- POST    `/games/filter`
- GET     `/games/detail/:id`

- POST    `/games`
- GET     `/games/wishlists`
- DELETE  `/games/wishlists/:id`
<hr><br />

**Signup User**
--------------
  Returns json data message success to `signup`

* **URL** <br/>
  `/users/signup`

* **Method:** <br/>
  `POST`
  
* **URL Params** <br/>
  None

  **Required:**
  * **Headers** <br/>
    None
  * **Data Body** <br/>
     ```
    {
      "username": "string",
      "email"   : "string",
      "password": "string"
    } 
    ```

* **Success Response:**
  * **Code:** 201 Created <br />
    **Content:** 
    ```
    {
      "id"      : "integer"
      "username": "string",
      "email"   : "string"
    } 
    ```

* **Error Response:**
  * **Code:** 400 Bad Request <br />
    **Content:** `{ "message": "username/email must be unique" }`
    <br/>OR :
  * **Code:** 400 Bad Request <br />
    **Content:** `{ "message": "Validation notEmpty on username/email failed" }`
    <br/>OR :
  * **Code:** 400 Bad Request <br />
    **Content:** `{ "message": "Validation isEmail on email failed" }`
    <br/>OR :
  * **Code:** 400 Bad Request <br />
  **Content:** `{ "message": "Your password must be at least 6 characters long. Please try another" }`
    <br/>OR :
  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`
<hr><br />

**SignIn User**
--------------
  Returns json data of user has signIn

* **URL** <br/>
  `/users/signin`

* **Method:** <br/>
  `POST`
  
* **URL Params** <br/>
  None

  **Required:**
  * **Headers** <br/>
    None

  * **Data Body**
  ```
    {
      "email"   : "string",
      "password": "string"
    }
  ```

* **Success Response:**
  * **Code:** 200 Ok <br />
    **Content:** 
    ```
    {
      "id": 1,
      "email": "client@mail.com",
      "username": "client1",
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJjbGllbnRAbWFpbC5jb20iLCJ1c2VybmFtZSI6ImNsaWVudDEiLCJpYXQiOjE2MTg5MzI3MjR9.MTAVFY_GemwZAvFYMSs7d3plZdy9gamhuaaHCsZvap8"
    }
    ```
 
* **Error Response:**
  * **Code:** 400 Bad Request <br />
    **Content:** `{ "message": "Wrong Password/Email!" }`
    <br/>OR :
  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`
<hr><br />

**Google SignIn User**
--------------
  Returns json data message success to `Google SignIn`

* **URL** <br/>
  `/users/googleLogin`

* **Method:** <br/>
  `POST`
  
* **URL Params** <br/>
  None

  **Required:**
  * **Headers** <br/>
    ```
    {
      idToken : 'string'
    } 
    ```
  * **Data Body** <br/>
    None

* **Success Response:**
  * **Code:** 200 Ok <br />
    **Content:** 
    ```
    {
      "id"          : "integer"
      "username"    : "string",
      "email"       : "string",
      "access_token": "string"
    } 
    ```

* **Error Response:**
  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`
<hr><br />

**Show Games**
--------------
  Returns json data of All Games

* **URL** <br/>
  `/games`

* **Method:** <br/>
  `GET`
  
* **URL Params** <br/>
  None

  **Required:**
  * **Headers** <br/>
    None

  * **Data Body** <br/>
  none

* **Success Response:**
  * **Code:** 200 Ok <br />
    **Content:** 
    ```
    {
    "data": [
        {
            "id": 9151,
            "cover": {
                "id": 110283,
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2d3f.jpg"
            },
            "genres": [
                {
                    "id": 14,
                    "name": "Sport"
                }
            ],
            "name": "Super Punch-Out!!",
            "rating_count": 36
        },
        {
            "id": 91083,
            "cover": {
                "id": 64345,
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/xtrrg8dxazfzbuluxchk.jpg"
            },
            "genres": [
                {
                    "id": 9,
                    "name": "Puzzle"
                },
                {
                    "id": 33,
                    "name": "Arcade"
                }
            ],
            "name": "SPILLZ",
            "rating_count": 0
        } ... 
    ```

* **Error Response:**
  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`
<hr><br />

**Show Games Filter By Platform**
--------------
  Returns json data of All Games where `Platforms = Playstation, Xbox or PC`

* **URL** <br/>
  `/games/filter`

* **Method:** <br/>
  `POST`
  
* **URL Params** <br/>
  None

  **Required:**
  * **Headers** <br/>
    None

  * **Data Body** <br/>
    `platform: string`

* **Success Response:**
  * **Code:** 200 Ok <br />
    **Content:** 
    ```
    {
    "data": [
        {
            "id": 32136,
            "cover": {
                "id": 124116,
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2nro.jpg"
            },
            "genres": [
                {
                    "id": 31,
                    "name": "Adventure"
                },
                {
                    "id": 32,
                    "name": "Indie"
                },
                {
                    "id": 34,
                    "name": "Visual Novel"
                }
            ],
            "name": "Along the Edge",
            "platforms": [
                {
                    "id": 3,
                    "name": "Linux"
                },
                {
                    "id": 6,
                    "name": "PC (Microsoft Windows)"
                },
                {
                    "id": 14,
                    "name": "Mac"
                },
                {
                    "id": 130,
                    "name": "Nintendo Switch"
                }
            ],
            "rating_count": 2
        } ...
    ```

* **Error Response:**
  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`
<hr><br />

**Show Game Detail**
--------------
  Returns json data of detail Game

* **URL** <br/>
  `/detail/:id`

* **Method:** <br/>
  `POST`
  
* **URL Params** <br/>
  `id: ['integer']`

  **Required:**
  * **Headers** <br/>
    None

  * **Data Body** <br/>
    None

* **Success Response:**
  * **Code:** 200 Ok <br />
    **Content:** 
    ```
    {
    "detailGame": {
        "detail": [
            {
                "id": 83509,
                "cover": {
                    "id": 88078,
                    "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1vym.jpg"
                },
                "involved_companies": [
                    {
                        "id": 89496,
                        "company": {
                            "id": 426,
                            "name": "Disney Interactive Studios"
                        }
                    },
                    {
                        "id": 89497,
                        "company": {
                            "id": 843,
                            "name": "Harmonix Music Systems"
                        }
                    }
                ],
                "name": "Disney Fantasia: Music Evolved",
                "platforms": [
                    {
                        "id": 12,
                        "name": "Xbox 360"
                    },
                    {
                        "id": 49,
                        "name": "Xbox One"
                    }
                ],
                "summary": "This bundle features a digital version of the full game, plus the Rock, Pop and Dance Expansion packs.",
                "url": "https://www.igdb.com/games/disney-fantasia-music-evolved",
                "videos": [
                    {
                        "id": 32771,
                        "video_id": "fT6HkslWClE"
                    }
                ]
            }
        ],
        "developer": "Disney Interactive Studios, Harmonix Music Systems",
        "platform": "Xbox 360, Xbox One"
    }
}
    ```

* **Error Response:**
  * **Code:** 404 Not Found <br />
    **Content:** `{ error : Cannot GET /games/detail/ }`
  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`
<hr><br />

**Add game to Wishlist**
--------------
  Returns json message of success add game to wishlist

* **URL** <br/>
  `/games`

* **Method:** <br/>
  `POST`
  
* **URL Params** <br/>
  None

  **Required:**
  * **Headers** <br/>
    access_token

  * **Data Body**
  ```
    {
      "name": "string",
      "gameId": "integer"
    }
  ```

* **Success Response:**
  * **Code:** 201 Ok <br />
    **Content:** 
    ```
    {
      "id": 83509,
      "cover": {
          "id": 88078,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1vym.jpg"
      },
      "involved_companies": [
          {
              "id": 89496,
              "company": {
                  "id": 426,
                  "name": "Disney Interactive Studios"
              }
          },
          {
              "id": 89497,
              "company": {
                  "id": 843,
                  "name": "Harmonix Music Systems"
              }
          }
      ],
      "name": "Disney Fantasia: Music Evolved",
      "platforms": [
          {
              "id": 12,
              "name": "Xbox 360"
          },
          {
              "id": 49,
              "name": "Xbox One"
          }
      ],
      "summary": "This bundle features a digital version of the full game, plus the Rock, Pop and Dance Expansion packs.",
      "url": "https://www.igdb.com/games/disney-fantasia-music-evolved",
      "videos": [
          {
              "id": 32771,
              "video_id": "fT6HkslWClE"
          }
      ]
    } ...
    ```

* **Error Response:**
  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`
<hr><br />

**Show Game Wishlist**
--------------
  Returns json data of all wishlist game

* **URL** <br/>
  `/games//wishlists`

* **Method:** <br/>
  `GET`
  
* **URL Params** <br/>
  None

  **Required:**
  * **Headers** <br/>
    `access_token`

  * **Data Body** <br/>
    None

* **Success Response:**
  * **Code:** 200 Ok <br />
    **Content:** 
    ```
    {
    "data": [
        {
            "id": 233,
            "cover": {
                "id": 77288,
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1nmw.jpg"
            },
            "involved_companies": [
                {
                    "id": 18928,
                    "company": {
                        "id": 24,
                        "name": "Sierra Entertainment"
                    }
                },
                {
                    "id": 18929,
                    "company": {
                        "id": 56,
                        "name": "Valve Corporation"
                    }
                },
                {
                    "id": 88970,
                    "company": {
                        "id": 22994,
                        "name": "NVIDIA Lightspeed Studios"
                    }
                }
            ],
            "name": "Half-Life 2",
            "summary": "1998. HALF-LIFE sends a shock through the game industry with its combination of pounding action and continuous, immersive storytelling. \n \nNOW. By taking the suspense, challenge and visceral charge of the original, and adding startling new realism and responsiveness, Half-Life 2 opens the door to a world where the player's presence affects everything around him, from the physical environment to the behaviors even the emotions of both friends and enemies."
        },
        {
            "id": 113345,
            "cover": {
                "id": 114183,
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2g3r.jpg"
            },
            "involved_companies": [
                {
                    "id": 72091,
                    "company": {
                        "id": 26,
                        "name": "Square Enix"
                    }
                },
                {
                    "id": 72092,
                    "company": {
                        "id": 852,
                        "name": "Platinum Games"
                    }
                }
            ],
            "name": "NieR: Automata - Game of the YoRHa Edition",
            "summary": "NieR:Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines. \n \nThe NieR:Automata™ Game of the YoRHa Edition includes the game itself and comes packed with DLC and bonus content for the full experience of the award-winning post-apocalyptic action RPG, including: \n- 3C3C1D119440927 DLC* \n- Cardboard Pod Skin \n- Retro Grey Pod Skin \n- Retro Red Pod Skin \n- Grimoire Weiss Pod \n- Machine Mask Accessory \n- (PC Version) Valve Character Accessory, Exclusive set of wallpapers in the following sizes: 1024 x 768, 1280 x 1024, 1920 x 1080, 2560 x 1600 \n- (PS4 Version) Play System Pod Skin, the amazarashi Head Pod Skin, a Dynamic Theme and 15 PSN avatars."
        } ...
    ```
* **Error Response:**
  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`
<hr><br />

**Delete Wishlist Game**
--------------
  Returns json message of success delete wishlist game

* **URL** <br/>
  `/wishlists/:id`

* **Method:** <br/>
  `DELETE`
  
* **URL Params** <br/>
  `gameId: ['integer']`

  **Required:**
  * **Headers** <br/>
    access_token

  * **Data Body**
  None

* **Success Response:**
  * **Code:** 200 Ok <br />
    **Content:** 
    ```
    {
      "message": "Success delete!"
    }
    ```

* **Error Response:**
  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`
<hr><br />