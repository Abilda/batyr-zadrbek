function GuitarItem() {
    const guitarPhotoUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAAD8/Pz5+fn09PTo6Ojf39/b29vW1taGhoaOjo60tLTs7OxmZmZMTEyampqkpKRsbGylpaXAwMCTk5N7e3u4uLiAgIBlZWXMzMzGxsZVVVXw8PCIiIhgYGAnJyc3NzcQEBBAQEAYGBgwMDBJSUl0dHQVFRUgICBZWVkeHh41NTU9PT3qZg95AAAL50lEQVR4nO1da3eiOhTN4RkIkBBeggKCSMX6/3/fDbYzoxbtPPACWe41H6S1a509Sc77BIReeOGFF1544YUXxoPq6OrHJ003phXlOQhBoFl3XlOJD+3U4owPZdviLGaR24Y8MGyYWp4nwAsvHriMDH3/4oHJyNCqLx6kZHhFSj6GeowCQKxQzk8s5ZVyAndioUZFWZ3EsgGk56f9O4PoFIA5sVRjAoKqhE1sf+hTI2HQHRLYTCzVmGjBw2AgNTk/GZQ1iK+yiYUaFYqu6oARSs5+W8ppM7VET4DTH8JE7z+SjL5PLc4ToEGAED0rF0uXcg21KkYoIP1HXwtPuh3FU4s0Jri3So+xXqd2/1Rz+rbfrkCZWqwR8W6ftkCUhOTiYbNNKXg+k2qnbvHKB44cOxHrZkRI7FLoz6U8sI5glBypeasJY0GR0DSKTHtU2EMeo5IhlLfCXPAA0XJqiZ6BhiJk58IoWiZix6mleQZOwinltjAXkS5hjK9m3PRyFAQJRYqvIgJo5bGppRoTMYDfRKgJEhuprpPF4B0tUKcWa0QwnwuOiGd2hLQ2JhnQN383tVRjItvVzPIQpmGBdDvRM1C4j6eWakwo0doJG6QlVocwixB9m1qiZ0BoF2S5KxQwS6no1NI8AxpEiBWtRuyYSqVkfiEFjLvCaIv0yKeW5Ul4D519jaEOQJtalCfBXil+mVZrUn//3WWCeptoZ0NdSFhb+4DdlxD3cFjvp5bkWUi8mKwRrPBhakmeBWudCYZHF0vlr13C8gJSoIOPK7ni+1/IvYy4qGwNqbJsl7D3MS/U0sXyMoQK4E38k3aXhjUJPaPsiLxrKM5hgU4Sn8PQy3iH6sSUmCHmBVoJhnIGTz8Y+pYhLUO6z2wPrzsmL0P4QCVtfEj3mIpdGpnyMvQwEwxbeRkysYau0q+hTJ00l2B7gyZKa5ngTC3Kk8A8g+YoynXQpxblSWAHyztFZeNKy5BX/n7bNk0LUnayo36X6tRWLUvfydSVeAmhaULLSRLzTaqy0wW4YJjroWWU6dSiPAk9w3BDbb2RlSHZJWsvqk8uSMsQmsNue9jVIFXz7AVIbYRUp4l+kqrh6wLkZNjUCCNDaoZMGAyjlqq19AKk1kNuhAmuydSiPAkEdp9RvrQMj6yIqO+zrbQMT3pIMKV4LWunAtkaNkkFw05ehnoYp4xhV6q2xAuQMnat3C+iRlaGca9G396qA0jL8F2344Cw2JeyrQ19Mow5JX74/ZcXifjdsYOAEJLIyjCoWGflSWJ10jKEujqevTZ7alGehKBx7DQgnOXW1KI8CUGjJxkhjNrJ1KI8CVnj5GlMeMiiqUV5EjKw6nblF10hL8Oi3JdlJeXlLWekpWNhHvCQr6YW5UlISz1JWcBt3k0typMg1jDBLOUh8aYW5UlIoTjsy1NTluupRXkSUiDrcJX7XStro3d6ELuUYh4G26lFeRJ6hqZgmAdSDapfAIO9z4uwXYWytrJjWB/qt+bt7SBrIR8fncSwMbVjadfwuLEc26BhVk0typOAheed11ZRWPIyzLd+2TXlSbpx/E/gnZZrkcPsVFqGb9hP13HkhrIyNOFnk/DUojwJZuVEG9ehSSYvQ3EOXVXic2hCWNtNtD91sjI0BEP6Trt1Ii3DSk2UQgltLClDNajwKquDVWFDlmZZhmVp2VeMmEb76nwXNJTQVMcGYHd+Bs8mCw8z1DTfApRFSDJTNSs1Qh5KxC49jwVtcBB2R8HbCpa6mkYCR5/83IwGZJ2xNXxhDy8YOSldAyRLbG7XW7Dw5QyXCTUcPryam5GSTbyF5XWgEHBv1gXDxldPjk+zryMlCoWlldyirw0XGPRCL9POYkNDMwEsqzLsQoZuZ2F/et4wOFJCFtUcbQ9d9GyC7qIGRRwPZ6LaBc0HpzA0UWGC2Rlilyb2MEMNltNnUw82PZn9jQNQVcfTnau8w2op47N3roUwwFhpjdaStBoemtksponfHu4mMWCzUkujoHRwEwvsl1IcboaXwviVxbjDMFzKLdh35gt1SDuzxGsW3rML8ULmZ5U78/YOdLtTr22O9ximC5m9VO8EuBrwmuzidUzubGPBcBmx1D2GRESHH1HhPTc7WMgaokFjkYq41/aMk76mYqNagxEhX8g5RAOOtVNAlILWovXGx2S/rgav805OzxduFHw1BhhOpjiHrOzEJt26O6K2Qy2YzVLs4ZfJLQyuirQIyopv+XYF0GDE4EuHorqYcaHkRvYNdAhlVQW6jzwlMagHIhhkXyLIYYd9juA3vRYFaEKR5ho4gqEamWzNCbTIv7UNy7m51bhW+qlwqAOxAQVD98yQekz80EZQXP/dfjndYNfnqajFPs3RB8O9kph0TXvLYLCbRVxQHqO7fFuVAzGiO+2ToadEHwxRvVavT6K+oBdC0PLiQKXidB16Shroqw9Ns+8fCWjdVaNpthCfrceVB033YpP2SvIHQ53u++3oQBaeLr2fJd3Ft7lU+20rGPdOmmBYKIKhw+qztQdOdpfO25LK++plOsJNxP7rd61g6CqRkWg86d83g4DF1SXDaEHv9VCPFzrDj/psd/9TYfFVG1sa4+f8NhB2eV5Ru/1fhfwnqG8Xa2ivP3ftT4aU9U6PATi5aqVtF7SG2mUQHwgFUvaq5QfDzcdICQO0vfK08wWdQ/1S7+viULL+wF0wFMzUKuwt5QWW9G6Wax3ZdUg9RGeGqzNDm/l96QZZ1wFvtqB3Pq6uLHkfMmCgSBHWQrXN3LEEwxCwcxMibpZTQ7zNXReNKhYocn4wTLgXia94x5tUxnYxnre1vX7egNiVRg2AVyg0bMf3oTZQ8iWneOuJzxabLx40Bl9FCgcAv/bfS4CyP4df7nDRIP+fRPxHRF+HDXCft0AQ76PSe6cdXzv1UCBhLeNGRWOogrTpwMV9jM+w7bgMwBvKjGrLmNvzh1OC2R76twBHtGiPd2+o4UswGObdcnwMp3PKuy7zezUmtVnA4J5/dzBNAWNlhCTS/fjuWBCff7uCeT8jKBj6Gs9yfUXu+tjacfsUsUaEW9z9lWDobnhm6QW5//7DcO7JGuNBUrdnqLHAMgpy/61kDsx8sK148E748xr2DDvyYGhmwBOYE8xHfld/Dje8X8P4QZzkwKxfB7X2H/xSMLScIGYmfdisb835JD6uUguGiR4QwfDhwIUDMx6Erh8t4XkNe4aYBg+j+Xy+NvGbpPWPNfyOoQ4P/6OmhPdAkfY4n0PCMXukaVDfpDjThoXsji3UdBNnMSEMaEHCPOFJCNgwdGejqYMFQzzXIlQ3mISwz7eZDKB62x3Kcjv0N95ulhUMc1DLK6dBer8w1HYSz1PXRM3QllPKbxgOKSf1MEddow53+KrfMRxcrVmWoeJhU/HtLh10YAYzIVOjuOOJrL9hOJzPOM3vKinlXuqle0Tvbb8a7mRj87t2Ibv3ehw97TX/JrNvD2TH8X2bYMwvORx97y5ju64+2TVt8E1z0PwCjN+rqji9cxOkv7E+3dzuVjTHdiXp3EIoMrYBi+dW8vbHdkKMuZUwRr/eWZuZMh1/nkeZWa/p6IpGMJxXeJGO3/t6mJdBDMZvumvmlRh+MfwLzGyXZqMzVGYWIY7/MvH5WYuxb7aYm8Uf/7WUc/ParlpmR8HtVMrk2I89Sh/NLZ9o3S/f/x1mN+T1uJr053Bmpmh6icZtZuJzC4AR2o57EE/zuyKD32+R+QvM8dXdm1F9kHaOPYpjZmqMWRaBH7bS/CH8uSVLP+B/U8X/fWS3Le4zgT5WvDPfa2rGuhFhP9M+BYFilHkJd7TdPj605t/1qeJ7s+zD+IQD/j+Kt/HWcyYoKFb1PwWuKcyvun0DpfuHBtiNP+/u2U9w8P7Of9tQcJdxPY2TwPrPr1zFCXjzqlQ8gh4eqjb4fddSweEW2nllD7+Diu0ajv3lulh/XLNRMS8q8ON5+mmPofY3JHfnHpPS8y3K4wAbjvZhDBRNxwHPuwrA58a8DcT32JgZYbbvNburfppq64ZEmhuvf0DRHN0wTUOs5dSivPDCCy+88MILMuE/42Sw87QA45oAAAAASUVORK5CYII=";
    return (
    <div className="GuitarItem">
        <img src={guitarPhotoUrl} height="140px"></img>
        Guitar Description fjsailksjflk
        Price: 1400$
    </div>
    );
}

export default GuitarItem;