document.addEventListener("DOMContentLoaded", () => {

    /*
    ================================================
    SMOOTH SCROLL
    ================================================
    */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener("click", (event) => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });


    /*
    ================================================
    SERVICE CARD BUTTONS
    ================================================
    */

    document
        .querySelectorAll(".service-card")
        .forEach((card) => {

            const button =
                card.querySelector(".service-plus");

            if (!button) {
                return;
            }

            button.addEventListener("click", (event) => {

                event.stopPropagation();

                card.classList.toggle("active");

            });

        });

});
