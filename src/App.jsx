import { For, onMount } from 'solid-js';

export default function App() {

  onMount(() => {
    console.log('App mounted');
  });

  const methods = [
    {
      title: 'Freelancing',
      description: 'Offer your skills in writing, graphic design, programming, virtual assistance, or other areas to clients online. Platforms like Upwork, Fiverr, and Freelancer.com connect freelancers with potential employers.',
    },
    {
      title: 'Content Creation',
      description: 'Start a blog, YouTube channel, or podcast and monetize it through advertising, sponsorships, or selling your own products or services.',
    },
    {
      title: 'Online Teaching/Tutoring',
      description: 'Share your knowledge in a specific subject by tutoring students online through platforms like Skooli, TutorMe, or Chegg Tutors.',
    },
    {
      title: 'E-commerce',
      description: 'Sell products online through platforms like Etsy, Amazon, or your own website. This could involve creating and selling handmade goods, reselling items, or dropshipping.',
    },
    {
      title: 'Online Surveys and Micro-tasks',
      description: 'Participate in online surveys, complete small tasks, or test websites for companies. While these may not generate significant income, they can provide some extra cash.',
    },
  ];

  return (
    <div class="h-full flex flex-col items-center bg-gradient-to-br from-purple-100 to-blue-100">
      <div class="max-w-3xl w-full p-4">
        <h1 class="text-4xl font-bold text-purple-600 text-center mb-8">Online Earning Methods</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <For each={methods}>
            {(method) => (
              <div class="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                <h2 class="text-2xl font-semibold text-purple-600 mb-4">{method.title}</h2>
                <p class="text-gray-700 flex-grow">{method.description}</p>
              </div>
            )}
          </For>
        </div>
      </div>
      <footer class="mt-8">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}