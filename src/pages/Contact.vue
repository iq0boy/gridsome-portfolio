<template>
    <Layout :hideHeader="true" :disableScroll="true">
        <div class="container mx-auto pt-24 pb-16 relative overflow-x-hidden">

                <PageTitle :title="'Contact'">
                    <ContactLogo></ContactLogo>
                </PageTitle>

                <form
                        action="https://formspree.io/mlepbawr"
                        method="POST"
                        class="w-full"
                >
              <!--      <figure id="contact-logo" class="absolute">
                        <ContactLogo></ContactLogo>
                    </figure>
-->
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
    </layout>
</template>

<script>
    import PageTitle from "../components/PageTitle";
    import ContactLogo from '~/assets/svg/undraw_connection_b38q.svg?inline'

    export default {
        metaInfo: {
            title: "Contact"
        },
        components: {
            PageTitle,
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

</style>