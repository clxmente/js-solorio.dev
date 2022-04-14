import Head from "next/head";
import NavBar from "../components/NavBar";
import ContactLink from "../components/ContactLink";
import { MailIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [emailEmpty, setEmailEmpty] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [msgEmpty, setMsgEmpty] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check if the fields are empty and return if they are
    if (!email || !message) {
      if (!email) {
        setEmailEmpty(true);
      }
      if (!message) {
        setMsgEmpty(true);
      }
      return;
    }

    // return if email is not valid and have them re-enter
    var validator = require("email-validator");
    if (!validator.validate(email)) {
      setInvalidEmail(true);
      return;
    }

    let messageObj = {
      email,
      message,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(messageObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    // clear the fields
    setEmail("");
    setMessage("");
  };

  return (
    <div className="mx-auto max-w-4xl py-10 px-5">
      <Head>
        <title>Clemente Solorio: Contact</title>
        <link rel="icon" href="https://github.com/clxmente.png" />
      </Head>

      <NavBar active={"contact"} />

      <main className="mx-auto max-w-3xl space-y-6 py-12">
        <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-6xl">
          Contact
        </h1>
        <p className="font-semibold text-white opacity-80">
          You can reach out to me via email by filling out the form below, or
          through any of my social medias linked here.
        </p>
        <div className="justify-between space-y-6 md:flex">
          <div className="grid grid-cols-1 gap-3">
            <ContactLink
              url={"mailto:clem@solorio.dev"}
              text={"clem@solorio.dev"}
              label={"Email"}
              icon={<MailIcon className="h-8 w-8 text-white" />}
            />
            <ContactLink
              url={"https://twitter.com/clxmente"}
              text={"@clxmente"}
              label={"Twitter"}
              icon={<FaTwitter className="h-8 w-8 text-white" />}
            />
            <ContactLink
              url={"https://instagram.com/clxmente"}
              text={"@clxmente"}
              label={"Instagram"}
              icon={<FaInstagram className="h-8 w-8 text-white" />}
            />
            <ContactLink
              text={"clem#0001"}
              label={"Discord"}
              icon={<FaDiscord className="h-8 w-8 text-white" />}
            />
          </div>

          <form className="space-y-3 rounded-md border border-gray-700 bg-gray-900 p-5 md:w-1/2">
            <div className="space-y-1">
              <label
                htmlFor="email-field"
                className="block font-bold text-white"
              >
                Email
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MailIcon
                    className="h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                </div>
                <input
                  className={
                    emailEmpty || invalidEmail
                      ? "base-email border border-red-400"
                      : "base-email"
                  }
                  autoComplete="off"
                  placeholder="your@email.com"
                  id="email-field"
                  type={"email"}
                  value={email}
                  onInput={(e) => {
                    setEmail(e.target.value);
                    setEmailEmpty(false);
                    setInvalidEmail(false);
                  }}
                />
              </div>
            </div>
            <div className="space-y-1">
              <label
                htmlFor="email-field"
                className="block font-bold text-white"
              >
                Message
              </label>
              <textarea
                className={
                  msgEmpty
                    ? "base-textarea border border-red-400"
                    : "base-textarea"
                }
                rows={7}
                id="email-field"
                placeholder="leave your message here"
                value={message}
                onInput={(e) => {
                  setMessage(e.target.value);
                  setMsgEmpty(false);
                }}
              />
            </div>
            <button
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
              className="rounded-md border border-gray-700 bg-gray-800 px-3 py-2 font-semibold text-white hover:bg-[#18212F]"
            >
              Send
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Contact;
