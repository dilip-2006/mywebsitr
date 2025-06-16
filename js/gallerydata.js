// Gallery data
const galleryData = [{
        id: 1,
        title: "Autonomous guided vehicle",
        description: "Autonomous guided vehicle for testing stability and performance in outdoor environments.",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEiTeik5sgI7qcAmjIX7eVpuIGI8dus5mEBWOD91NCDM0kPy8QYQ4IA5333qS4kzYWLv22EIe1xdSl3WQLjdpqzyQ7xfQFeFgMr0qXaySNAzTiNMjbYnhvLoJopaf4LXgZPGW49aZIAZqP2xrX1UaBQW683tZIo1VKX1Y31sGw9uaghjdsJpbzYb3zKaQ/s320/agv%2011.jpg"
    },
    {
        id: 2,
        title: "Arduino-controlled robotic arm system for automated manipulation and positioning tasks.",
        description: "Evaluating sub-millimeter accuracy in medical applications",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgER62VtOdjw9ahc2NuUSi82s5m17F3d1bzuHcPR7L2HFm9pDHCJut_bUY8mnvNbMXnnWjK-I4-Z-VC5WTJS-r45gv4nGCXcJQlU2mHyliWm8xC97EohHUkLebjE0c6Om8vgkB3_77BfIXfSuCG7tnEcX-JG_VRJtngYBGUGrvLpd2z9iSsOz0KAUhJoiQ/s320/braccio%2011.jpg"
    },
    {
        id: 3,
        title: "Fpv Drone",
        description: "First-person view drone with real-time video transmission for immersive flight control and aerial surveillance.",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhl0SMLM_WUVuFQs1t-kknceYAaJvV_q72OlRMdDMZBbxOMq4a9DQswZIm5GzLk5na_O3G8CeQzdNGyApxsRmN5SkSr7SlGfc0RJPNzGSphHuEPHlCqHWSaXG2IZifc4CZE9UH4Np-iNDwTP_UjFqsvNFPDNJ3eifZwNBOWb5Cdz7yK3ZCd944Ry2bdXjc/s320/drone.jpg"
    },
    {
        id: 4,
        title: "Human & Line Following Robots",
        description: "Autonomous robots programmed to track and follow human subjects or designated path lines using sensor-based navigation.",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxm_q3A7aaKCqs6T5_3r1-EnNq8LwSHy5n8lfNa3xWhcPP-bjh7UMU3JYsRuut1DHiUCajp9JqKUAAUI2B5JbiwtGRkR3QwFqMXwa4NkEy31ZAZ93uIjB8keJuxjBOhBk5_MIPl6GL26mS6_Q3FY0LdJg6l_F_ijlVTt0Ia8zPNBWF0aNQl3MI8ahXmR4/s320/human.jpg"
    },
    {
        id: 5,
        title: "TurtleBot",
        description: "ROS-compatible mobile robot platform for research, education, and autonomous navigation development.",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNJ-n-1MIJ6zQR6FJxLRgNzXZdezfItc62FGaeIosY4PbVin03YTVciBxTn1bokyH3kr7fw-_kdGtlJslL4RVD1yrV-QT1To19ijveSYHM6dzX2JmswDIjZXy6wjTM7iBKWOvMWbArCwPddXizUcQqstt-f1XtgnJvHSIIMUZIl5e-t-kPqBVA1RDryG4/s320/turte.jpg"
    },
    {
        id: 6,
        title: "Mitsubishi Robot",
        description: "Where innovation happens",
        image: "https://mitsubishi-electric-eshop.mee.com/medias/bcd2525e-ae58-49b2-9ba8-30f48f4e87e2-productPanelImage?context=bWFzdGVyfHJvb3R8MTUxMDd8aW1hZ2UvanBlZ3xhRGs1TDJoa015ODRPRFE1TmpZeU1EVXdNek0wTG1wd1p3fDgwODZkZTE2NDJiMTgwNmI3YmI0ZDAyMzBlZWUzMzk5NWNhNDFjMmZkYmUzMmE3YTcwMDgyMTEyYzM1ZWI5MWI"
    },
    {
        id: 7,
        title: "Incineration bot",
        description: "Automated robotic system for safe handling and disposal of hazardous materials through controlled incineration processes.",
        image: "https://blogger.googleusercontent.com/img/a/AVvXsEi27Y3WPnBAcDzmkBBHd9cOgj5kNCuYaD_7gzEUtar7wqCjQbhWwRClxh6WJa18PRbZvDF1-a4v3vcp2HkvX9CsXcPrhL5fQ_NH0iHM8pVwTTw7QNIwpFcnfzeBptzoMZHSCVQw6gLBsyOL98sP9JHKXjv9f9hyuwnUV8UYtQzaMLaZzhhhOg9zuddK_YuD"
    },
    {
        id: 8,
        title: "Dobot magician",
        description: "Desktop robotic arm platform for educational programming, 3D printing, laser engraving, and pick-and-place operations.",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuCPZHzmj0VG5nghq-NfWj6-lujovbFav7-TzP_jq2Hm8XTwhe9rJP6qoOZ3m3pRGg903vFWgGJ5NsXw0CQQpNv_0KZI_aQqxoNl3Ejms2tYxALEUiEaj3ajFZI8e8attvj-9ei_rSy3uofIGI1M94j8wKkGzlVpwV4PNUzKTb8-LJaMLABGCmU3zVCvU/s320/dobot.jpg"
    },
    {
        id: 9,
        title: "Self-Balancing Robot",
        description: "Testing dynamic stability algorithms",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvMpzet_noasEviQnIjF45SeN0HEFqmHN2wWfkPKuuK56Skf7VyuJbid3DG6td5VsacY2XirEhVNzwjVMDhyphenhyphenRhfUlY9hrHV0FYyA9b3jBctSQMSu-qKq78XBaMEdFKCquj_bMF1LlyrLMZznR5MWsRl-fVqDjKjqn3vDkyyyZYw5Gefg_6fwnkZ5hETQo/s320/self-balancing-robot-cover.jpg"
    },
    {
        id: 10,
        title: "Color Teaching System",
        description: "Training vision systems for color recognition",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhAfDO-MEOalG_F8TOqZfAxtHHZcanDuJlpYQ2-A504hXJUTs8UMse9Vm4GnT7ocGfgLK7s_t9CxPbDXM8xOeBw5ejX-IHtybKJJKBpBGqj7lgnvNFbq-z2SF3Win2W2ExZT-hb_aLQL9dssRGE0zNMadsUuOjqiTniORkfrRGvZSisp3A9tKYa5kOTbg/s320/teach%20color.jpg"
    },
    {
        id: 11,
        title: "Smart Helmet Prototype",
        description: "IoT-enabled safety equipment for industrial workers",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXc1PQPcGr_N2ldTOtBpM5EZnemMrAxmuz7S3CwDjBxT50mRahtGsV4ihlm_1fgB-r4XluejpNP32f_cqupYi8auMXndzuyciz7O7HluxMg7g1DsIRTcCLPBQ1erg7aY6mRAKhLpZV2k5jD_b_juRAzE4_PGIDZlLFEQKEJrl5-9rvYosh5b2wm2cuCfs/s320/helmet.jpeg"
    }
];