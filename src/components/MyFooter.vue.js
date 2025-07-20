import image1 from "../assets/bankers/Badge.png";
import image2 from "../assets/bankers/Badge (1).png";
import image3 from "../assets/bankers/Badge (2).png";
import image4 from "../assets/bankers/Badge (3).png";
import image5 from "../assets/bankers/Badge (4).png";
import emailjs from "@emailjs/browser";
import { ref } from "vue";
const images = ref([image1, image2, image3, image4, image5]);
function Sendemail(event) {
    emailjs
        .sendForm("mosad102030", // Replace with your service ID
    "template_62vvvwa", // Replace with your template ID
    event.target)
        .then((result) => {
        console.log("Email sent:", result.text);
        alert("Email sent successfully");
    }, (error) => {
        console.error("Email error:", error.text);
        alert("Failed to send email.");
    });
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=MyFooter.vue.js.map