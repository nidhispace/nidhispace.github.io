// Single source of truth for the publication list.
// Used by publications.html (full list) and index.html (summary numbers + latest papers).
// status: "under review" marks a submitted, not yet accepted paper.
const publications = [
  // status: "under review" = submitted, not yet accepted. When accepted: delete the status line (and add link/journal details).
  {
    authors: "Nidhi Tripathi, Andrea Pozzer, Rolf Sander, Sergey Gromov, Bianca Krumm, Nijing Wang, Achim Edtbauer, Akima Ringsdorf, Clara Nussbaumer, Philip Holzbeck, Joseph Byron, Antonia Hartmann, Linda Ort, Florian Obersteiner, Hartwig Harder, Horst Fischer, Joachim Curtius, Jos Lelieveld, Jonathan Williams",
    title: "Convective transport amplifies tropical upper-tropospheric oxidation through VOC-NO synergy",
    journal: "Environmental Science & Technology",
    year: 2026,
    status: "under review",
    link: ""
  },
  {
    authors: "Nidhi Tripathi, Bianca E. Krumm, Achim Edtbauer, Akima Ringsdorf, Nijing Wang, Matthias Kohl, Ryan Vella, Luiz A. T. Machado, Andrea Pozzer, Jos Lelieveld, Jonathan Williams",
    title: "Impacts of convection, chemistry, and forest clearing on biogenic volatile organic compounds over the Amazon",
    journal: "Nat Commun",
    year: 2025,
    nidhiFirstAuthor: true,
    link: "https://www.nature.com/articles/s41467-025-59953-2"
  },
  {
    authors: "Mansi Gupta, Lokesh Kumar Sahu, Nidhi Tripathi, Arvind Singh",
    title: "Processes Controlling DMS Variability in Marine Boundary Layer of the Arabian Sea During Post‐Monsoon Season of 2021",
    journal: "JGR Atmosphere",
    year: 2025,
    nidhiFirstAuthor: false,
    link: "https://doi.org/10.1029/2024JD042547"
  },
  {
    authors: "L. K. Sahu, Mansi Gupta, Nidhi Tripathi, Ravi Yadav, Tanzil Gaffar Malik, Mizuo Kajino",
    title: "Effect of Different Sources and Meteorological Processes on the Variability of VOC Composition in a Metropolitan City of Western India During Summer Season",
    journal: "JGR Atmosphere",
    year: 2025,
    nidhiFirstAuthor: false,
    link: "https://doi.org/10.1029/2024JD042547"
  },
  {
    authors: "Joachim Curtius, Martin Heinritzi, Lisa J. Beck, Mira L. Pöhlker, Nidhi Tripathi, et. al.",
    title: "Isoprene nitrates drive new particle formation in Amazon's upper troposphere",
    journal: "Nature",
    year: 2024,
    nidhiFirstAuthor: false,
    link: "https://www.nature.com/articles/s41586-024-08192-4"
  },
  {
    authors: "Nidhi Tripathi, Imran A. Girach, Sobhan Kumar Kompalli, Vishnu Murari, Prabha R. Nair, S. Suresh Babu, Lokesh Kumar Sahu",
    title: "Sources and Distribution of Light NMHCs in the Marine Boundary Layer of the Northern Indian Ocean During Winter: Implications to Aerosol Formation",
    journal: "JGR Atmosphere, Volume 129, Issue 3",
    year: 2024,
    nidhiFirstAuthor: true,
    link: "https://doi.org/10.1029/2023JD039433"
  },
  {
    authors: "Tanzil Gaffar Malik, Mansi Gupta, Nidhi Tripathi, Lokesh Kumar Sahu",
    title: "Change in monoterpene concentrations during winter-to-summer transition period and impact of COVID-19 lockdown at an urban site in India",
    journal: "Atmospheric Environment",
    year: 2024,
    nidhiFirstAuthor: false,
    link: "https://doi.org/10.1016/j.atmosenv.2025.121141"
  },
  {
    authors: "Vaishali Jain, Nidhi Tripathi, Sachchida N. Tripathi, Mansi Gupta, Lokesh K. Sahu, Vishnu Murari, Sreenivas Gaddamidi, Ashutosh K. Shukla, Andre S. H. Prevot",
    title: "Real-time measurements of non-methane volatile organic compounds in the central Indo-Gangetic basin, Lucknow, India: source characterization and their role in O3 and secondary organic aerosol formation",
    journal: "Atmospheric Chemistry and Physics",
    year: 2023,
    nidhiFirstAuthor: false,
    link: "https://acp.copernicus.org/articles/23/3383/2023/"
  },
  {
    authors: "Himadri Sekhar Bhowmik, Sachchida Nand Tripathi, Ravi Sahu, Ashutosh Kumar Shukla, Vipul Lalchandani, Shamitaksha Talukdar, Nidhi Tripathi, Lokesh Sahu",
    title: "Insights into the Regional Transport and Local Formation of Secondary Organic Aerosol in Delhi, India",
    journal: "Aerosol and Air Quality Research",
    year: 2022,
    nidhiFirstAuthor: false,
    link: "https://aaqr.org/articles/aaqr-22-03-oa-0113"
  },
  {
    authors: "Nidhi Tripathi, LK Sahu, Liwei Wang, Pawan Vats, Meghna Soni, Purushottam Kumar, RV Satish, Deepika Bhattu, Ravi Sahu, Kashyap Patel, Pragati Rai, Varun Kumar, Neeraj Rastogi, Narendra Ojha, Shashi Tiwari, Dilip Ganguly, Jay Slowik, André SH Prévôt, Sachchida N Tripathi",
    title: "Characteristics of VOC composition at urban and suburban sites of New Delhi, India in winter",
    journal: "Journal of Geophysical Research: Atmospheres",
    year: 2022,
    nidhiFirstAuthor: true,
    link: "https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/2021JD035342"
  },
  {
    authors: "Vaishali Jain, Sachchida N Tripathi, Nidhi Tripathi, Lokesh K Sahu, Sreenivas Gaddamidi, Ashutosh K Shukla, Deepika Bhattu, Dilip Ganguly",
    title: "Seasonal variability and source apportionment of non-methane VOCs using PTR-TOF-MS measurements in Delhi, India",
    journal: "Atmospheric Environment",
    year: 2022,
    nidhiFirstAuthor: false,
    link: "https://www.sciencedirect.com/science/article/abs/pii/S135223102200228X"
  },
  {
    authors: "Ravi Yadav, Pushpendra Vyas, Praveen Kumar, Lokesh Kumar Sahu, Umangkumar Pandya, Nidhi Tripathi, Mansi Gupta, Vikram Singh, Pragnesh N Dave, Devendra Singh Rathore, Gufran Beig, SNA Jaaffrey",
    title: "Particulate Matter Pollution in Urban Cities of India During Unusually Restricted Anthropogenic Activities",
    journal: "Frontiers in Sustainable Cities",
    year: 2022,
    nidhiFirstAuthor: false,
    link: "https://www.frontiersin.org/articles/10.3389/frsc.2022.792507/full"
  },
  {
    authors: "LK Sahu, Nidhi Tripathi, Mansi Gupta, Vikas Singh, Ravi Yadav, Kashyap Patel",
    title: "Impact of COVID‐19 pandemic lockdown in ambient concentrations of aromatic volatile organic compounds in a metropolitan city of western India",
    journal: "Journal of Geophysical Research: Atmospheres",
    year: 2022,
    nidhiFirstAuthor: false,
    link: "https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/2022JD036628"
  },
  {
    authors: "V Lalchandani, D Srivastava, J Dave, S Mishra, Nidhi Tripathi, AK Shukla, R Sahu, NM Thamban, S Gaddamidi, K Dixit, D Ganguly, S Tiwari, AK Srivastava, L Sahu, N Rastogi, P Gargava, SN Tripathi",
    title: "Effect of Biomass Burning on PM2.5 Composition and Secondary Aerosol Formation During Post‐Monsoon and Winter Haze Episodes in Delhi",
    journal: "Journal of Geophysical Research: Atmospheres",
    year: 2022,
    nidhiFirstAuthor: false,
    link: "https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/2021JD035232"
  },
  {
    authors: "Shamitaksha Talukdar, Sachchida Nand Tripathi, Vipul Lalchandani, Maheswar Rupakheti, Himadri Sekhar Bhowmik, Ashutosh K Shukla, Vishnu Murari, Ravi Sahu, Vaishali Jain, Nidhi Tripathi, Jay Dave, Neeraj Rastogi, Lokesh Sahu",
    title: "Air Pollution in New Delhi during Late Winter: An Overview of a Group of Campaign Studies Focusing on Composition and Sources",
    journal: "Atmosphere",
    year: 2022,
    nidhiFirstAuthor: false,
    link: "https://www.mdpi.com/2073-4433/12/11/1432"
  },
  {
    authors: "Arnab Mondal, Ummed Singh Saharan, Rahul Arya, Lokesh Yadav, Sakshi Ahlawat, Ritu Jangirh, Garima Kotnala, Nikki Choudhary, Rubiya Banoo, Akansha Rai, Pooja Yadav, Martina Rani, Shyam Lal, Gareth J Stewart, Beth S Nelson, W Joe F Acton, Adam R Vaughan, Jacqueline F Hamilton, James R Hopkins, C Nicholas Hewitt, Lokesh K Sahu, Nidhi Tripathi, SK Sharma, Tuhin K Mandal",
    title: "Non-methane volatile organic compounds emitted from domestic fuels in Delhi: emission factors and total city-wide emissions",
    journal: "Atmospheric Environment: X",
    year: 2022,
    nidhiFirstAuthor: false,
    link: "https://www.sciencedirect.com/science/article/pii/S2590162121000277"
  },
  {
    authors: "Ashutosh K Shukla, Vipul Lalchandani, Deepika Bhattu, Jay S Dave, Pragati Rai, Navaneeth M Thamban, Suneeti Mishra, Sreenivas Gaddamidi, Nidhi Tripathi, Pawan Vats, Neeraj Rastogi, Lokesh Sahu, Dilip Ganguly, Mayank Kumar, Vikram Singh, Prashant Gargava",
    title: "Real-time quantification and source apportionment of fine particulate matter including organics and elements in Delhi during summertime",
    journal: "Atmospheric Environment",
    year: 2022,
    nidhiFirstAuthor: false,
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1352231021004209"
  },
  {
    authors: "Nidhi Tripathi, LK Sahu, K Patel, A Kumar, R Yadav",
    title: "Ambient air characteristics of biogenic volatile organic compounds at a tropical evergreen forest site in Central Western Ghats of India",
    journal: "Journal of Atmospheric Chemistry",
    year: 2021,
    nidhiFirstAuthor: true,
    link: "https://link.springer.com/article/10.1007/s10874-021-09415-y"
  },
  {
    authors: "GJ Stewart, WJF Acton, BS Nelson, AR Vaughan, JR Hopkins, R Arya, et al.",
    title: "Emissions of non-methane volatile organic compounds from combustion of domestic fuels in Delhi, India",
    journal: "Atmospheric Chemistry and Physics",
    year: 2021,
    nidhiFirstAuthor: false,
    link: "https://acp.copernicus.org/articles/21/2383/2021/"
  },
  {
    authors: "LK Sahu, R Yadav, Nidhi Tripathi",
    title: "Aromatic compounds in a semi-urban site of western India: seasonal variability and emission ratios",
    journal: "Atmospheric Research",
    year: 2020,
    nidhiFirstAuthor: false,
    link: "https://doi.org/10.1016/j.atmosres.2020.105114"
  },
  {
    authors: "Nidhi Tripathi, LK Sahu, A Singh, R Yadav, A Patel, K Patel, P Meenu",
    title: "Elevated levels of biogenic nonmethane hydrocarbons in the marine boundary layer of the Arabian Sea during the intermonsoon",
    journal: "Journal of Geophysical Research: Atmospheres",
    year: 2020,
    nidhiFirstAuthor: true,
    link: "https://doi.org/10.1029/2020JD032869"
  },
  {
    authors: "Nidhi Tripathi, LK Sahu",
    title: "Emissions and atmospheric concentrations of α-pinene at an urban site of India: role of changes in meteorology",
    journal: "Chemosphere",
    year: 2020,
    nidhiFirstAuthor: true,
    link: "https://doi.org/10.1016/j.chemosphere.2020.127071"
  },
  {
    authors: "L Wang, JG Slowik, Nidhi Tripathi, D Bhattu, P Rai, V Kumar, P Vats, R Satish",
    title: "Source characterization of volatile organic compounds measured by proton-transfer-reaction time-of-flight mass spectrometers in Delhi, India",
    journal: "Atmospheric Chemistry and Physics",
    year: 2020,
    nidhiFirstAuthor: false,
    link: "https://doi.org/10.5194/acp-20-9753-2020"
  },
  {
    authors: "LK Sahu, Nidhi Tripathi, R Yadav",
    title: "Observations of trace gases in Earth's lower atmosphere: instrumentation and platform",
    journal: "Current Science",
    year: 2020,
    nidhiFirstAuthor: false,
    link: "https://wwwops.currentscience.ac.in/Volumes/118/12/1893.pdf"
  },
  {
    authors: "Nidhi Tripathi, LK Sahu, A Singh, R Yadav, KK Karati",
    title: "High levels of isoprene in the marine boundary layer of the Arabian Sea during spring inter-monsoon: role of phytoplankton blooms",
    journal: "ACS Earth and Space Chemistry",
    year: 2020,
    nidhiFirstAuthor: true,
    link: "https://doi.org/10.1021/acsearthspacechem.9b00325"
  },
  {
    authors: "Pragnesh N. Dave, Lokesh Kumar Sahu, Nidhi Tripathi, Samiksha Bajaj, Ravi Yadav, Kashyap Patel",
    title: "Emissions of non-methane volatile organic compounds from a landfill site in a major city of India: Impact on local air quality",
    journal: "Heliyon",
    year: 2020,
    nidhiFirstAuthor: false,
    link: "https://linkinghub.elsevier.com/retrieve/pii/S2405844020313815"
  },
  {
    authors: "R Yadav, LK Sahu, Nidhi Tripathi, D Pal, G Beig, SNA Jaaffrey",
    title: "Investigation of emission characteristics of NMVOCs over urban site of western India",
    journal: "Environmental Pollution",
    year: 2019,
    nidhiFirstAuthor: false,
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0269749118353338"
  },
  {
    authors: "LK Sahu, Nidhi Tripathi, V Sheel, N Ojha",
    title: "The influence of local meteorology and convection on carbon monoxide distribution over Chennai",
    journal: "Journal of Earth System Science",
    year: 2019,
    nidhiFirstAuthor: false,
    link: "https://link.springer.com/article/10.1007/s12040-019-1156-z"
  },
  {
    authors: "R Yadav, LK Sahu, G Beig, Nidhi Tripathi, S Maji, SNA Jaaffrey",
    title: "The role of local meteorology on ambient particulate and gaseous species at an urban site of western India",
    journal: "Urban Climate",
    year: 2019,
    nidhiFirstAuthor: false,
    link: "https://www.sciencedirect.com/science/article/abs/pii/S2212095518300804"
  },
  {
    authors: "Nidhi Tripathi, LK Sahu",
    title: "Enhancement of biogenic emissions of VOCs in the semi-arid region of India during winter to summer transition period: Role of meteorological conditions",
    journal: "Atmospheric Chemistry and Physics Discussions",
    year: 2019,
    nidhiFirstAuthor: true,
    link: "https://acp.copernicus.org/preprints/acp-2019-335/"
  },
  {
    authors: "LK Sahu, Nidhi Tripathi, V Sheel, M Kajino, M Deushi, R Yadav, P Nedelec",
    title: "Impact of the tropical cyclone Nilam on the vertical distribution of carbon monoxide over Chennai on the Indian peninsula",
    journal: "Quarterly Journal of the Royal Meteorological Society",
    year: 2018,
    nidhiFirstAuthor: false,
    link: "https://doi.org/10.1002/qj.3276"
  },
  {
    authors: "LK Sahu, Nidhi Tripathi, R Yadav",
    title: "Contribution of biogenic and photochemical sources to ambient VOCs during winter to summer transition at a semi-arid urban site in India",
    journal: "Environmental Pollution",
    year: 2017,
    nidhiFirstAuthor: false,
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0269749117309946"
  },
  {
    authors: "R Yadav, LK Sahu, G Beig, Nidhi Tripathi, SNA Jaaffrey",
    title: "Ambient particulate matter and carbon monoxide at an urban site of India: influence of anthropogenic emissions and dust storms",
    journal: "Environmental Pollution",
    year: 2017,
    nidhiFirstAuthor: false,
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0269749116312210"
  }
];
