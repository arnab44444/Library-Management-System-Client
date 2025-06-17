import React from 'react';
import { motion } from 'framer-motion';

const HappyClients = () => {
  return (
    <section className="my-24 bg-gray-400">
      <h3 className="text-5xl font-bold text-blue-600 text-center p-5 mb-12">
        What Our Readers Say
      </h3>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 p-5">
        {/* Card 1 */}
        <motion.div
          className="card bg-base-100 shadow-xl p-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="https://i.ibb.co/LD0Nv6J1/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.jpg" alt="Ayesha Rahman" />
              </div>
            </div>
          </div>
          <div className="card-body space-y-5 text-center">
            <p className="mb-2">
              I love how easy it is to borrow and return books online. This library has made reading more accessible than ever!
            </p>
            <div className="rating justify-center">
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                  readOnly
                />
              ))}
            </div>
            <h6 className="font-bold text-primary">Ayesha Rahman</h6>
            <p>University Student</p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="card bg-base-100 shadow-xl p-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="https://i.ibb.co.com/Z6JStKWQ/successful-mature-businessman-looking-at-camera-with-confidence.jpg" />
              </div>
            </div>
          </div>
          <div className="card-body space-y-5 text-center">
            <p className="mb-2">
              The library system is well-organized and the book collection is amazing. Perfect for both casual readers and researchers.
            </p>
            <div className="rating justify-center">
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                  readOnly
                />
              ))}
            </div>
            <h6 className="font-bold text-primary">Rafiq Hossain</h6>
            <p>College Lecturer</p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="card bg-base-100 shadow-xl p-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="https://i.ibb.co.com/NdBqLsc3/a-secretary-is-sitting-at-the-office-and-makes-an-appointment-while-talking-on-the-phone-with.jpg" alt="Maya Das" />
              </div>
            </div>
          </div>
          <div className="card-body space-y-5 text-center">
            <p className="mb-2">
              As a book lover, I really appreciate the clean interface and how quickly I can find my favorite genres!
            </p>
            <div className="rating justify-center">
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                  readOnly
                />
              ))}
            </div>
            <h6 className="font-bold text-primary">Maya Das</h6>
            <p>Book Enthusiast</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HappyClients;
