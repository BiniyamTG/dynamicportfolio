import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="PEET's Coffe"
          des=" I am Back-End Developer in Peet's Coffe and involved by managing databases, ensuring secure data transactions, and implementing APIs for seamless integration with frontend services."
          listItem={[]}
          link="https://www.peets.com/pages/coffeepeople?utm_medium=Search&utm_source=Google&utm_campaign=2024-cfcp&utm_content=LPcoffeepeople&utm_term=CFCP&utm_campaign=21328118134&utm_device=c&utm_content=700554475333&utm_term=coffee%20shop&utm_keymatch=b&utm_adposition=&gad_source=1&gclid=CjwKCAjwx4O4BhAnEiwA42SbVD0uQIwF_VNKPxJBurfYcQ89duWkIzCt66KVP9uvX_PoVtmSFPcgPBoCupcQAvD_BwE"
        />
        <ArchiveCard
          title="Le Enat Mobile App"
          des=" A prenatal and postnatal care mobile app, available in Amharic, Afan Oromo, and English, helps mothers track pregnancy milestones, receive health tips, and monitor postpartum progress."
          listItem={[]}
          link="https://biniyamtg.github.io/le-enat/"
        />
        <ArchiveCard
          title="Note to Image converter"
          des=" The Note to Image Converter is a web app that turns text notes into shareable images. Users can input a title, note, and social media icons with usernames, then download the customized image for easy sharing on platforms like Instagram and Twitter."
          listItem={[]}
          link="https://biniyamtg.github.io/memories/"
        />
        <ArchiveCard
          title="Let's have a fun"
          des=" a web app that randomly produces jokes for users to enjoy and share. With a simple click, it delivers a fun and entertaining joke, perfect for lightening the mood or sparking a laugh."
          listItem={[]}
          link="https://biniyamtg.github.io/Joke-Generator/"
        />
        <ArchiveCard
          title="Kelal Gebeya"
          des=" It offers a seamless shopping experience, allowing users to browse a wide range of products, read reviews, and make secure purchases with ease. With personalized recommendations and a user-friendly interface, it simplifies online shopping for everyone."
          listItem={[]}
          link="https://biniyamtg.github.io/Bcommerce/"
        />
        <ArchiveCard
          title="Ben To Do"
          des="  users organize tasks efficiently, allowing them to prioritize, set deadlines, and track progress "
          listItem={[]}
          link="https://biniyamtg.github.io/ben_ToDo/"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              
             
              
              
             
              
              <ArchiveCard
                title="Melodies"
                des="  allows users to play a virtual piano with realistic sound and touch"
                listItem={[]}
                link="https://biniyamtg.github.io/Melodies/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <ArchiveCard
                title="Notes"
                des=" This is a minimalistic note taking app enables users to create, organize, and manage notes effortlessly,"
                listItem={[]}
                link="https://biniyamtg.github.io/Notes/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <ArchiveCard
                title="Let's Spin"
                des="It helps users make decisions by generating random selections from a list of options."
                listItem={[]}
                link="https://biniyamtg.github.io/let-s-spin/"
              />
            </motion.div>
            
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
