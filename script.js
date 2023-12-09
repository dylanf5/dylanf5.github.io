body, html {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    color: #333;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

#main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    cursor: pointer;
}

h1 {
    font-size: 100px;
    margin: 10px 0;
    position: relative;
    color: #333;
    animation: glitch 500ms infinite;
}

h2 {
    font-size: 1.5rem;
    color: #333;
    margin: 5px 0;
}

p {
    font-size: 1rem;
    color: #767676;
}

.documentation-link, .footer-link {
    color: #0366d6;
    text-decoration: none;
}

.documentation-link:hover, .footer-link:hover {
    text-decoration: underline;
}

.footer {
    margin-top: 2rem;
    font-size: 0.9rem;
    color: #767676;
}

/* Glitch Effect */
@keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-5px, 5px);
  }
  40% {
    transform: translate(-5px, -5px);
  }
  60% {
    transform: translate(5px, 5px);
  }
  80% {
    transform: translate(5px, -5px);
  }
  100% {
    transform: translate(0);
  }
}

#glitch::before,
#glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: #333;
  animation: glitch 500ms infinite;
}

#glitch::before {
  color: #67f3da;
  clip: rect(24px, 550px, 90px, 0);
  animation-delay: -250ms;
}

#glitch::after {
  color: #f16f6f;
  clip: rect(85px, 550px, 140px, 0);
  animation-delay: -125ms;
}
