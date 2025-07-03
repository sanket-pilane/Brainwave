# 🚀 Brainwave – A SaaS Platform for Next-Gen AI Tools


## 🧠 What is Brainwave?

**Brainwave** is a full-stack SaaS AI platform that consolidates multiple AI-powered tools under one roof. Designed to enhance productivity for students, developers, and creatives, it offers a unified workspace for chat, media generation, and code assistance - all powered by cutting-edge AI models.

No more juggling between different AI platforms. Brainwave brings everything together into one powerful tool - from conversation to creation.

---

## 🎯 Problem It Solves

Today’s AI tools are fragmented across different services. Whether it’s chat, code, or media generation, users constantly switch platforms - causing loss of context, inefficiency, and a poor user experience.

**Brainwave solves this** by bringing essential AI functionality into one seamless, efficient interface. It’s especially powerful for:

- Students summarizing content
- Developers building and testing prototypes
- Creators generating visuals, music, and code

---

## 🧩 Key Features

- 💬 **AI Chat** – Powered by OpenAI for real-time intelligent conversations
- 🖼️ **Image Generation** – Uses Replicate’s `flux-1.1-pro-ultra` model
- 🎥 **Video Generation** – Via MiniMax’s `video-01` with 720p cinematic results
- 🎵 **Music Creation** – Via MiniMax’s `music-01`, generates vocals & instrumentals
- 👨‍💻 **Code Completion** – Real-time AI code generation using OpenAI

---

## 🛠️ Tech Stack

**Frontend**
- ⚛️ React.js
- 🚀 Next.js
- 🎨 Tailwind CSS

**Backend & APIs**
- 🧠 OpenAI API (chat & code)
- 🖼️ Replicate (image, video, audio)
- 🔐 Clerk Auth (authentication)
- 🧪 Postman (API testing)
- 🐙 Git & GitHub (version control)

**Design Principles**
- ✅ Clean, modern UI/UX
- ✅ Fully mobile-responsive
- ✅ Fast API responses with scalable architecture

---

## 📸 Media Models in Action

### 🎥 Video
- **Model**: `minimax/video-01`
- Text-to-video & image-to-video support
- 720p HD output
- Cinematic camera motion
- 25fps with 6s clip duration (10s coming soon)

### 🎵 Audio
- **Model**: `minimax/music-01`
- Generates music with vocals
- Multiple genres supported (pop, classical, etc.)
- 60s duration support

### 🖼️ Image
- **Model**: `black-forest-labs/flux-1.1-pro-ultra`
- High resolution output up to 4MP
- Delivers results in under 10 seconds
- Ideal for artwork, thumbnails, and prompt visuals

---

## 📽️ Demo

🎥 A quick demo video walkthrough of Brainwave Web is available in the repo. Explore it and share your feedback 🙌

---

## 📱 What’s Next?

Coming soon: **Brainwave Mobile App** built in **Flutter** - with the same powerful AI tools, fully optimized for mobile & tablet experiences.

---

## Project Preview

| Authentication page                                                                                                     | Dashboard Page                                                                                                          | Loading state Page                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ![Screenshot from 2024-09-14 10-31-31](https://github.com/user-attachments/assets/0a09578b-cf4a-488c-9b1d-75d389a8e914) | ![Screenshot from 2024-09-14 10-31-51](https://github.com/user-attachments/assets/7a211961-fec6-4f44-bef5-dddb97fb35ed) | ![Screenshot from 2024-09-14 10-32-05](https://github.com/user-attachments/assets/5b792402-b9c7-4508-9e9d-cd43d8bcda30) |

| Responsed Page                                                                                                          | CodeGenrator Page                                                                                                       | OnDemand agent Page                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ![Screenshot from 2024-09-14 10-32-22](https://github.com/user-attachments/assets/a8ea9e29-84f9-4d89-9c2b-56987c9fcaa2) | ![Screenshot from 2024-09-14 10-32-47](https://github.com/user-attachments/assets/001ca480-f33e-4ae7-b8d4-fa2ab959f650) | ![Screenshot from 2024-09-14 10-45-04](https://github.com/user-attachments/assets/1914b915-b45f-4dfb-82d2-80de74ec8df5) |

---


## 🚀 Quick Start

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)


**Cloning the Repository**

```bash
git clone https://github.com/sanket-pilane/Brainwave.git
cd brainwave
cd src
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

Happy Building with AI! 😊
