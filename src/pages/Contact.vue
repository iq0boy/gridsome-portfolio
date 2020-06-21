<template>
    <Layout :hideHeader="true" :disableScroll="true">
        <div class="container mx-auto pt-24 pb-16 px-4 sm:px-0">
            <div class="lg:mx-32 md:mx-16 sm:mx-8">

                <h1 class="pb-8 text-6xl font-medium">Contact</h1>

                <form
                        action="https://formspree.io/mlepbawr"
                        method="POST"
                        class="w-full relative"
                >
                    <figure id="contact-logo" class="absolute">
                        <ContactLogo></ContactLogo>
                    </figure>

                    <fieldset class="mt-2">
                        <label for="_replyto">Your email :</label>
                        <input class="w-full mt-2 rounded border-gray-600" id="_replyto" type="email" name="_replyto">
                    </fieldset>

                    <fieldset class="mt-2">
                        <label for="name">Your name :</label>
                        <input class="w-full mt-2 rounded border-gray-600" id="name" type="text" name="name">
                    </fieldset>

                    <fieldset class="mt-2">
                        <label for="subject">Subject :</label>
                        <input class="w-full mt-2 rounded border-gray-600" id="subject" type="text" name="subject" required="required">
                    </fieldset>

                    <fieldset class="mt-2">
                        <label class="txt-blue-600" for="message">Your message :</label>
                        <textarea class="w-full mt-2 rounded border-gray-600" id="message" name="message" rows="10" maxlength="400" required="required"></textarea>
                    </fieldset>

                    <fieldset class="mt-4">
                        <button class="border border-black py-2 px-4 cursor-pointer text-bold rounded font-medium text-center w-full" type="submit">Submit</button>
                    </fieldset>

                </form>


            </div>
        </div>
    </layout>
</template>

<script>
    import ContactLogo from '~/assets/svg/undraw_connection_b38q.svg?inline'

    export default {
        metaInfo: {
            title: "Contact"
        },
        components: {
            ContactLogo
        }
    };
</script>

<style>
    input, textarea {
        color: #191b1f;
        border: 1px solid black;
        background-color: #dddddd;

    }
    body[data-theme="dark"] input, body[data-theme="dark"] textarea {
        background-color: lightgrey;
        color: #191b1f;
        border: 1px solid black;
    }
    button[type="submit"] {
        background-color: lightgrey;
        color: #191b1f;
        border-color: rgb(113, 128, 150);;
    }
    body[data-theme="dark"] button[type="submit"] {
        background-color: lightgrey;
        border-color: black;
        color: #191b1f;
    }
    #contact-logo {
        z-index: -1;
        top: -15rem;
        right: -18rem;
        width: 80%;
    }
    svg {
        width: 100%;
    }
</style>