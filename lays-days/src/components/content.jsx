import React from "react";
import WOW from "wowjs";

export default class Content extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();

  }

  render() {
    let images = [
      <div
        style={{
          "background-image":
            "url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/1.dc59205a.png)",
          "background-size": "cover"
        }}
      />,
      <div
        style={{
          "background-image":
            "url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/2.09d5f843.png)",
          "background-size": "cover"
        }}
      />,
      <div
        style={{
          "background-image":
            "url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/3.416330f5.png)",
          "background-size": "cover"
        }}
      />,
      <div
        style={{
          "background-image":
            "url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/4.71d17a4f.png)",
          "background-size": "cover"
        }}
      />,
      <div
        style={{
          "background-image":
            "url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/5.d0f1531e.png)",
          "background-size": "cover"
        }}
      />,
      <div
        style={{
          "background-image":
            "url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/6.d542dd6f.png)",
          "background-size": "cover"
        }}
      />,
      <div
        style={{
          "background-image":
            "url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/7.7c6c40b0.png)",
          "background-size": "cover"
        }}
      />,
      <div
        style={{
          "background-image":
            "url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/8.0a2ab336.png)",
          "background-size": "cover"
        }}
      />,
      <div
        style={{
          "background-image":
            "url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/9.4c9c4447.png)",
          "background-size": "cover"
        }}
      />
    ];

    let screenWidth = document.body.clientWidth;
    let animationSlideLeft = "";
    let animationSlideRight = "";
    if (screenWidth > 680) {
      animationSlideLeft = "slideToRight";
      animationSlideRight = "slideToLeft";
    }

    return (
      <div className="content">
        <section className={"content-section-1 wow " + animationSlideRight}>
          <div className="item-section-1">
            <div className="icon wow animationZoom" />
            <p className="text wow fadeIn">Загружай фото</p>
            <p className="text wow fadeIn">с хэштегом</p>
            <p className="text hashtag wow fadeIn">#летосLays</p>
          </div>
          <div className="item-section-2">
            <div className="icon wow animationZoom" />
            <p className="text wow fadeIn">Собирай</p>
            <p className="text wow fadeIn">лайки</p>
          </div>
          <div className="item-section-3">
            <div className="icon wow animationZoom" />
            <p className="text wow fadeIn">Выигрывай</p>
            <p className="text wow fadeIn">призы</p>
          </div>
          <div className="text-block">
            <h1 className="first">ЛЕТО</h1>
            <h1 className="middle">ВКУСНЕЕ</h1>
            <h1 className="last">
              С <span>Lay's</span>
            </h1>
          </div>
        </section>
        <section className={"content-section-2 wow " + animationSlideLeft}>
          <div className="content-section-2-1">
            <div className="image" />
            <div className="text">
              <p>Загружай</p>
              <p>фото</p>
              <p>с хэштегом </p>
              <p className="hashtag">#летосLays</p>
            </div>
            <div className="button">ГАЛЕРЕЯ</div>
          </div>
          <div className="content-section-2-2">{images}</div>
        </section>
        <section className="content-section-3">
          <div className={"content-section-3-1 wow " + animationSlideLeft}>
            <div className="image" />
            <div className="title">
              <p className="title_text">Выиграй призы</p>
              <p className="title_text">от Lay's</p>
            </div>
            <p className="text">
              Этим летом брэнд Lay's задает тренд на яркое,
            </p>
            <p className="text">
              вкусное лето и на позитивный желтый цвет
            </p>
            <div className="button">О ПРОЕКТЕ</div>
          </div>
          <div className={"content-section-3-2 wow " + animationSlideRight} />
        </section>
        <section className="content-section-4">
          <div className={"content-section-4-1 wow " + animationSlideLeft} />
          <div className={"content-section-4-2 wow " + animationSlideRight}>
          <p className="title_text">Лето с Lay's</p>
          <div className="button">ПЕРЕЙТИ</div>
          </div>
        </section>
        <div className="footer">
          <div className="icon"></div>
          <p className="text">© 2015 Lay's Russia. Все права защищены</p>
          <div className="button__block">
            <a href="https://www.facebook.com/lays.russia" target="blank">
              <div className="button"
              style={{
                "background-image":"url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/7gAmQWRvYmUAZMAAAAABAwAVBAMGCg0AAAISAAACgwAAAwoAAAOz/9sAhAACAgICAgICAgICAwICAgMEAwICAwQFBAQEBAQFBgUFBQUFBQYGBwcIBwcGCQkKCgkJDAwMDAwMDAwMDAwMDAwMAQMDAwUEBQkGBgkNCwkLDQ8ODg4ODw8MDAwMDA8PDAwMDAwMDwwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCAAgAB8DAREAAhEBAxEB/8QApAAAAgIDAAAAAAAAAAAAAAAAAAcBAgMFBgEBAAIDAQAAAAAAAAAAAAAAAAEEAgMGBRAAAQIGAwEAAAAAAAAAAAAAAgEDECARBAUGEiIyABEAAgEDAwQDAAAAAAAAAAAAAQIDETEEABAhQRITBZEiFRIBAAMAAAAAAAAAAAAAAAAAIDABIRMBAQACAgIDAQEAAAAAAAAAAREAIRAxQVEgYXGhsf/aAAwDAQACEQMRAAABX3ZcpBKBIM2jb2WGag9GiDNo2+b3auWsaQyQqVl//9oACAEBAAEFApdUxhX+V28ssV1DT3HE2DNPPOZSAkYEqqq/f//aAAgBAgABBQKV8+I2/GkLjw2nWX//2gAIAQMAAQUClZCpP8qwY9uL2l//2gAIAQICBj8CWCl//9oACAEDAgY/AlsX/9oACAEBAQY/AtrbwzPAJ8HDfuy62BIPZx151EPYwRw4yvL+Z46fZOL03wY1kYRyl/LGDw1ENx117BZZXkEWTKI1die0VsK23DI7RuLOpofkaJYlibk32//aAAgBAQMBPyHOu9HvN6aB6US/l5PSKsoVP0YdHxANdrPidzmm7By8Jaj7wuvHG3StPznvTDR/kHESnXVL5V4//9oACAECAwE/IfjcLt6w9neryS8Ih65S8//aAAgBAwMBPyH47qaO8X0PHKYxFX3yM5//2gAMAwEAAhEDEQAAEBCBAAsA0P/aAAgBAQMBPxDFAqAKrQBkhBtLB7QKfnK75GXFZSmwE1vWGvzr0G6sMjt1zDVyHUuKdkMyAOzHJSGg1BzUMGxkjQFNMcfoRtujUVfK8f/aAAgBAgMBPxD4kJBf6LvxrAujG3w76/vKlQpI+TZ1jUAosO9effICJT7wA0cf/9oACAEDAwE/EPihKm/wz93jBIU6+vv+ciEWNp7094ApYpXrfjlFRji3vj//2Q==)",
                "background-color":"#336AA3"
              }}
              ></div>
            </a>
            <a href="https://vk.com/lays_russia" target="blank">
              <div className="button"
              style={{
                "background-image":"url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/7gAmQWRvYmUAZMAAAAABAwAVBAMGCg0AAAIxAAAC2AAAA4EAAARX/9sAhAACAgICAgICAgICAwICAgMEAwICAwQFBAQEBAQFBgUFBQUFBQYGBwcIBwcGCQkKCgkJDAwMDAwMDAwMDAwMDAwMAQMDAwUEBQkGBgkNCwkLDQ8ODg4ODw8MDAwMDA8PDAwMDAwMDwwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCAAgAB8DAREAAhEBAxEB/8QAsgABAAMBAQAAAAAAAAAAAAAAAAUGBwMIAQADAQEBAAAAAAAAAAAAAAAAAwUCBgEQAAAEBwEBAAAAAAAAAAAAAAECAwQAIBEhFAUGEhMRAAEDAgUCBwEAAAAAAAAAAAECAwQREwBREiIFICEQMUFhMiMUMxIAAQQDAQEAAAAAAAAAAAAAACABYQIQESExIhMBAAICAgIBBAMBAAAAAAAAAREhADFBUSBhcRDwkaGBwdGx/9oADAMBAAIRAxEAAAGo9fxgAAsyH7ZLqxTF4tTlRTMegpFnvn3Cq0iM3gAAf//aAAgBAQABBQKTTgwPsW3NNW++Yc6wA/0aZsafsk0m5Ou17wtGeZJ//9oACAECAAEFApFK+RWESGWGL0hRtfHEIvST/9oACAEDAAEFApE6egQADkRCLVhNzbJAYtWT/9oACAECAgY/AkcJGavpOPkZ6kp//9oACAEDAgY/AkdNa4O9vCMasO1iE//aAAgBAQEGPwLojtckjXEeNtW4p0qV8TUYfjPwRI4t9i7FWuptqBAKK1xzE3lmizx0Z5aYjZJTsQe6vfIYu/nUIF7V+au61X41zp4IjcqhxSmhpTLb3agPLUM8TovLx1LhuqIjlCa1a9AoV7EZ40hbpgXf6U+y1XLOnT//2gAIAQEDAT8h8LzdHBCwVNPzjnEaOIouXnZkG3nei3Y12YrBDrbHfllhBEdO8BVoSVK2MCpN5IPDyZ59CmGJUJkgc59P7eP/2gAIAQIDAT8h8I074YRiV+87sF5FM6b9/RGX4Yzxf959jU+P/9oACAEDAwE/IfCcGrjFSRXr1nThrJvjbXr6GfsYQxXHx7z97+Y8f//aAAwDAQACEQMRAAAQAAmzwZCC/9oACAEBAwE/EPCVK8QRFhQiCxEuMSCJs1DvAxNgTTk+6gboAjKas9TWNoSFYDao0mZF9YCUhAwfo6wkC9gI5A4+3wQZwQhTfSY8gEzSNJizByDvx//aAAgBAgMBPxDwTDBvUyGzIy7AEUdMf5jxUgVTbx/b1nGPwKbjqfoyYh5VHw9esTACXLr0eT1g3wU19lT4/wD/2gAIAQMDAT8Q8CQzVuIXTl+JEzY3L/eMGnhgLKOe/R3nMNlrtqe4xvDQMlQufk794GktaG+AJpO8iiXs9n/Y8f/Z",
                "background-color":"#307AA9"
              }}
              ></div>
            </a>
            <a href="https://lays.ru/" target="blank">
              <div className="button"
              style={{
                "background-image":"url(data:image/jpeg;base64,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)",
                "background-color":"#EEBF11"
            }}
              ></div>
            </a>
            <a href="https://www.youtube.com/user/LaysRussia" target="blank">
              <div className="button"
              style={{
                "background-image":"url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/7gAmQWRvYmUAZMAAAAABAwAVBAMGCg0AAAKEAAADiwAABIUAAAXC/9sAhAACAgICAgICAgICAwICAgMEAwICAwQFBAQEBAQFBgUFBQUFBQYGBwcIBwcGCQkKCgkJDAwMDAwMDAwMDAwMDAwMAQMDAwUEBQkGBgkNCwkLDQ8ODg4ODw8MDAwMDA8PDAwMDAwMDwwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCAAgAB8DAREAAhEBAxEB/8QAxwAAAgMAAAAAAAAAAAAAAAAABgcDBQgBAAIDAQEAAAAAAAAAAAAAAAQFAgMGAQcQAAEEAQMCBwEAAAAAAAAAAAEAAgMEBRETBhASITJCQxQ0FhURAAIBAgMEBwkAAAAAAAAAAAECAxEEABITITEiBRBBUWGBMhWxQlJikqIzFDUSAAECBAQHAAAAAAAAAAAAAAEAERAhMQLwYRIyMEFRocHhghMBAAICAQMEAwEBAAAAAAAAAQARITFBEFFhcYGRsfChwdHh/9oADAMBAAIRAxEAAAHP+Z99axCIWrOEqz7aVGmGGJt5DZDV+htIlEzyEsvYoMLViVR51crh5IFpaf/aAAgBAQABBQJVuOxXMXbwt+lCqNObIWsLgbYpX+M5zJ43ak3eDEfqK7clAKH9VsgLf0UckkTxyrkgUnJ+QysX/9oACAECAAEFAkGagtI6AapjPAxuIUPmGqGq9S3HLcd0/9oACAEDAAEFAk+4WSMsseVJII22bbe+K9DE/uGmU+u4xuU23p7BGq+BAhSgHT//2gAIAQICBj8C4QjVVh//2gAIAQMCBj8CRtIpgd0whqKnbcCW5dCp6sSTq5EywAr30u2Wfqi+fCYrYFsEP//aAAgBAQEGPwLFtfQXNJbmsYWRgqJJGWMpY/CEofHDz3CoEjOV6NU+dk9q9EVpb5dWWvE5ooAFSWPYBhVtuYcr5hZ2ksz3Ukcsm6aMKylguygFcNHF6fIbg663EcknGmdpFAqKe9vx+vkOtn09P5q0pjl1evUH2HFpbJDdRxzauaNUYJ+afNn6toI345JHG19FarcgRKVk3jSzKa04aZvNspuwW2ZPUq91NXCSxO0ckZzRyKaEHtBx/ZufqwyPzi6KuKMM9Nnh0f/aAAgBAQMBPyGaG3OrNKDDm4FZ8DBQ49X26UxFpY+44BWUvG8u1QKMZQTk8D8d15S/9xP+3iFGtEh7s1lel72wp6qKhRdn7aQKg8BalzLuXa/l+kBm1EdoGRmk9+/2Rt5z5FhNOn//2gAIAQIDAT8hmVPzvNp0RURdEScalcTTKKM/izzqn9dPOinLp//aAAgBAwMBPyGYAmWMqNFPLY9oSst/wfpOjzSfPgPWZIuBY7g1ec4lhorFIYaFeb41PQN+0v8AF9y41pXJfDXvetS1bN36H1vyXVxHDmBmixj/AMSO2fB0/9oADAMBAAIRAxEAABCo0HsIT7f/2gAIAQEDAT8Ql5TWslEKYDhZlJgIDXAyObfB56A8gEtRo3VVoxcCtaS6NuglLOSCdiQwV6ZiNirYKio3hj7ir800elymgM7xxB8/Ikag6JOyllR7/gsQ+1PfUgnjwk5N8K7o7Rwh9oQDpGC0u+Q18rEHsarVCFSKNMoqv6387n//2gAIAQIDAT8QgA2XGdCXl4CE3+Mp/OhvczREVaXkzmsYzKmXvNi5LU8c7lr7tT7/ANQVABvhryfqVIKWxvxZ6b3itQTLj/cFGxpIQAqfklT/2gAIAQMDAT8QlzKpIQYRpanFQ9aCyyj8K82cdLmMGAtKgDlSAS8Ek7KAWxWGH8BvixCmTG+GanJ65ei7+MwKvi/6xrBjVPPW8DzL5iIkNQ6OIg2/I5FXPZz5uEoAUiWJ2Ri4jpqNmDn36f/Z)",
                "background-color":"#C4070E"
              }}
              ></div>
            </a>
          </div>

        </div>
      </div>
    );
  }
}
