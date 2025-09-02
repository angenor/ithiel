<template>
  <section class="testimonials relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
    <!-- Background moderne avec gradient animé - Adaptatif light/dark -->
    <div class="absolute inset-0">
      <!-- Light mode gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-100/80 via-purple-100/80 to-pink-100/80 dark:from-indigo-900 dark:via-purple-900/50 dark:to-pink-900/50"></div>
      <div class="absolute inset-0 bg-gradient-to-tr from-blue-200/40 via-purple-200/40 to-pink-200/40 dark:from-blue-600/30 dark:via-purple-600/30 dark:to-pink-600/30 animate-gradient"></div>
      <div class="absolute inset-0 backdrop-blur-3xl bg-white/10 dark:bg-black/20"></div>
    </div>

    <!-- Éléments décoratifs flottants - Adaptatifs -->
    <div class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200/30 to-purple-200/30 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full blur-xl animate-float"></div>
    <div class="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-pink-200/30 to-red-200/30 dark:from-pink-400/20 dark:to-red-400/20 rounded-full blur-xl animate-float-delayed"></div>
    <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-yellow-200/30 to-orange-200/30 dark:from-yellow-400/20 dark:to-orange-400/20 rounded-full blur-xl animate-pulse"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header moderne avec effet glassmorphism - Adaptatif -->
      <div class="text-center mb-16">
        <div class="inline-block p-8 rounded-3xl bg-white/60 dark:bg-white/10 backdrop-blur-lg border border-gray-200/50 dark:border-white/20 shadow-2xl ">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {{ $t('testimonials.title') }}
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"></div>
        </div>
      </div>

      <!-- Grid de témoignages moderne -->
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="testimonial.id"
          class="testimonial-card group"
          :style="{ 'animation-delay': `${index * 0.2}s` }"
        >
          <!-- Carte avec effet glassmorphism et hover moderne - Adaptatif -->
          <div class="relative h-full p-8 rounded-3xl bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-gray-200/50 dark:border-white/20 shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 hover:bg-white/90 dark:hover:bg-white/15">
            <!-- Effet de brillance au hover -->
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-blue-200/20 dark:via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Étoiles de notation modernes -->
            <div class="flex justify-center mb-6">
              <div class="flex space-x-1">
                <div 
                  v-for="star in 5" 
                  :key="star"
                  class="w-5 h-5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 shadow-lg animate-twinkle"
                  :style="{ 'animation-delay': `${star * 0.1}s` }"
                ></div>
              </div>
            </div>

            <!-- Citation avec design moderne -->
            <div class="relative mb-8">
              <!-- Quote icon moderne - Adaptatif -->
              <div class="absolute -top-4 -left-2">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>
              
              <blockquote class="text-gray-700 dark:text-gray-100 text-base leading-relaxed pl-12 italic">
                "{{ testimonial.quote }}"
              </blockquote>
            </div>

            <!-- Profil utilisateur moderne -->
            <div class="flex items-center space-x-4">
              <div class="relative">
                <img 
                  :src="testimonial.photo" 
                  :alt="testimonial.name"
                  class="w-16 h-16 rounded-2xl object-cover border-2 border-gray-200/50 dark:border-white/30 shadow-xl"
                />
                <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white shadow-lg"></div>
              </div>
              
              <div class="flex-1">
                <h4 class="text-gray-900 dark:text-white font-semibold text-base">{{ testimonial.name }}</h4>
                <p class="text-gray-600 dark:text-gray-300 text-sm">{{ testimonial.title }}</p>
                <div v-if="testimonial.company" class="mt-2">
                  <div class="inline-flex items-center space-x-2 px-3 py-1 bg-gray-100/80 dark:bg-white/20 rounded-full border border-gray-200 dark:border-white/30">
                    <img 
                      :src="testimonial.companyLogo" 
                      :alt="testimonial.company"
                      class="h-4 w-auto filter dark:brightness-0 dark:invert"
                    />
                    <span class="text-gray-700 dark:text-white text-xs font-medium">{{ testimonial.company }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Logos d'entreprises avec design moderne - Adaptatif -->
      <div class="relative">
        <div class="text-center mb-12">
          <p class="text-gray-600 dark:text-gray-300 text-base">
            {{ $t('testimonials.trustedBy') }}
          </p>
        </div>
        
        <!-- Container avec défilement infini -->
        <div class="relative overflow-hidden">
          <div class="flex animate-scroll space-x-12 items-center">
            <div 
              v-for="(company, index) in [...companies, ...companies]" 
              :key="`${company.name}-${index}`"
              class="flex-shrink-0 p-6 rounded-2xl bg-white/20 dark:bg-white/5 backdrop-blur-sm border border-gray-200/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <img 
                :src="company.logo" 
                :alt="company.name"
                class="h-10 w-auto filter dark:brightness-0 dark:invert opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    id: 1,
    quote: "Ithiel a complètement transformé ma carrière. Les cours sont complets, bien structurés et enseignés par des experts. J'ai pu passer de débutant complet à décrocher mon poste de rêve en tant que développeur full-stack.",
    name: "Sarah Chen",
    title: "Développeuse Full Stack",
    company: "Google",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b36a59b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    id: 2,
    quote: "La qualité des cours sur Ithiel est exceptionnelle. J'ai suivi plusieurs formations pour me perfectionner en data science. Les projets pratiques ont fait toute la différence dans mon apprentissage.",
    name: "Michael Rodriguez",
    title: "Data Scientist",
    company: "Microsoft",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
  },
  {
    id: 3,
    quote: "En tant que professionnelle occupée, j'adore pouvoir apprendre à mon rythme. L'app mobile me permet de continuer à apprendre pendant mes trajets. Ithiel m'aide à rester à jour avec les dernières technologies.",
    name: "Emma Thompson",
    title: "Product Manager",
    company: "Amazon",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  }
]

const companies = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" }
]
</script>

<style scoped>
/* Animations de gradient dynamique */
@keyframes gradient {
  0%, 100% {
    transform: translateX(-50%) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translateX(-30%) scale(1.1);
    opacity: 0.6;
  }
}

.animate-gradient {
  animation: gradient 8s ease-in-out infinite;
}

/* Animations d'éléments flottants */
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) rotate(90deg);
  }
  50% {
    transform: translateY(-40px) rotate(180deg);
  }
  75% {
    transform: translateY(-20px) rotate(270deg);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
  33% {
    transform: translateY(-30px) rotate(120deg) scale(1.1);
  }
  66% {
    transform: translateY(30px) rotate(240deg) scale(0.9);
  }
}

.animate-float {
  animation: float 12s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 15s ease-in-out infinite;
}

/* Animation des cartes de témoignages */
.testimonial-card {
  opacity: 0;
  transform: translateY(80px) scale(0.8) rotateX(15deg);
  animation: cardSlideIn 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.175) forwards;
}

@keyframes cardSlideIn {
  0% {
    opacity: 0;
    transform: translateY(80px) scale(0.8) rotateX(15deg);
  }
  70% {
    opacity: 0.8;
    transform: translateY(-10px) scale(1.05) rotateX(-2deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotateX(0deg);
  }
}

/* Animation des étoiles scintillantes */
@keyframes twinkle {
  0%, 100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
  25% {
    transform: scale(1.2) rotate(90deg);
    opacity: 0.8;
  }
  50% {
    transform: scale(0.8) rotate(180deg);
    opacity: 1;
  }
  75% {
    transform: scale(1.1) rotate(270deg);
    opacity: 0.9;
  }
}

.animate-twinkle {
  animation: twinkle 2s ease-in-out infinite;
}

/* Animation de défilement infini pour les logos */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
  width: calc(200% + 3rem);
}

/* Effets de hover modernes */
.testimonial-card .relative:hover {
  transform: translateY(-8px) rotateY(5deg) rotateX(-2deg);
}

.testimonial-card .group:hover .absolute.inset-0 {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
}

/* Animation du badge en ligne */
.testimonial-card .bg-green-400 {
  animation: pulse 2s ease-in-out infinite;
}

/* Effets glassmorphism améliorés - Adaptatifs */
.testimonials .bg-white\/80 {
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8),
    inset 0 -1px 0 rgba(0, 0, 0, 0.05);
}

.dark .testimonials .dark\\:bg-white\/10 {
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}

/* Animation de texte gradient - Adaptatif light/dark */
.bg-gradient-to-r.from-gray-900.to-gray-600 {
  background: linear-gradient(
    90deg,
    #111827 0%,
    #4b5563 25%,
    #111827 50%,
    #4b5563 75%,
    #111827 100%
  );
  background-size: 200% 100%;
  animation: shimmer 3s ease-in-out infinite;
}

.dark .bg-gradient-to-r.dark\\:from-white.dark\\:to-gray-200 {
  background: linear-gradient(
    90deg,
    #ffffff 0%,
    #e5e7eb 25%,
    #ffffff 50%,
    #e5e7eb 75%,
    #ffffff 100%
  );
  background-size: 200% 100%;
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% {
    background-position: 200% 0;
  }
  50% {
    background-position: -200% 0;
  }
}

/* Optimisations responsives */
@media (max-width: 768px) {
  .testimonial-card {
    animation-duration: 0.8s;
    transform: translateY(50px) scale(0.9);
  }
  
  .animate-float,
  .animate-float-delayed {
    animation-duration: 8s;
  }
  
  .animate-twinkle {
    animation-duration: 1.5s;
  }
}

@media (max-width: 480px) {
  .testimonial-card {
    animation-duration: 0.6s;
    transform: translateY(30px) scale(0.95);
  }
  
  .animate-scroll {
    animation-duration: 20s;
  }
  
  .testimonials .absolute.top-20,
  .testimonials .absolute.bottom-20 {
    opacity: 0.3;
    transform: scale(0.5);
  }
}

/* Optimisation pour reduced motion */
@media (prefers-reduced-motion: reduce) {
  .testimonial-card,
  .animate-gradient,
  .animate-float,
  .animate-float-delayed,
  .animate-twinkle,
  .animate-scroll {
    animation: none;
  }
  
  .testimonial-card {
    opacity: 1;
    transform: none;
  }
  
  .bg-gradient-to-r.from-gray-900.to-gray-600 {
    background: #111827;
    animation: none;
  }
  
  .dark .bg-gradient-to-r.dark\\:from-white.dark\\:to-gray-200 {
    background: #ffffff;
    animation: none;
  }
}

/* Amélioration de l'accessibilité - Adaptatif */
@media (prefers-contrast: high) {
  .testimonials .bg-white\/80 {
    background: rgba(255, 255, 255, 0.9);
    border: 2px solid rgba(0, 0, 0, 0.2);
  }
  
  .dark .testimonials .dark\\:bg-white\/10 {
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.4);
  }
  
  .text-gray-700,
  .text-gray-900 {
    color: #000000;
  }
  
  .dark .text-gray-100,
  .dark .text-white {
    color: #ffffff;
  }
  
  .text-gray-600 {
    color: #374151;
  }
  
  .dark .text-gray-300 {
    color: #e5e7eb;
  }
}
</style>