# Structure de la page d'accueil Udemy

## Vue d'ensemble
Cette documentation décrit la composition complète de la page d'accueil d'Udemy pour reproduire fidèlement son interface utilisateur moderne et responsive.

---

## 1. Header (En-tête)

### Layout
```
[Logo Udemy] [Barre de recherche centrale] [Navigation] [Connexion] [Panier]
```

### Éléments
- **Logo Udemy** - Position : coin supérieur gauche
- **Barre de recherche**
  - Placeholder : "Rechercher un cours"
  - Icône de recherche (loupe)
  - Position : centre de l'en-tête
- **Menu de navigation principal**
  - Catégories (menu déroulant avec sous-catégories)
  - Enseigner sur Udemy
  - Mon apprentissage
- **Zone d'authentification** (coin supérieur droit)
  - Bouton "Se connecter"
  - Bouton "S'inscrire"
- **Icône panier d'achat** avec badge de nombre d'articles

### Spécifications techniques
- **Hauteur** : ~80px
- **Background** : Blanc (#FFFFFF)
- **Sticky navigation** : Fixed au scroll
- **Responsive** : Menu hamburger sur mobile

---

## 2. Section Hero/Bannière principale

### Contenu visuel
- **Image de fond** : Photo large avec étudiants/professionnels au travail
- **Overlay** : Dégradé sombre pour améliorer la lisibilité du texte

### Texte principal
- **Titre H1** : "Développez vos compétences avec les experts"
- **Sous-titre** : Description des bénéfices de la plateforme
- **CTA principal** : Barre de recherche élargie

### Éléments interactifs
- **Barre de recherche secondaire** (plus large que celle du header)
- **Boutons de catégories populaires**
  - Technology
  - Business
  - Design
  - Marketing
  - Personal Development

### Spécifications
- **Hauteur** : ~400px sur desktop, adaptative sur mobile
- **Couleurs** : Texte blanc avec ombres
- **Animation** : Effet parallax optionnel sur l'image de fond

---

## 3. Section "Cours en vedette"

### Structure
```
[Titre de section]
[Grid de cours - 4 colonnes sur desktop]
[Bouton "Voir plus"]
```

### Titre de section
- **H2** : "Un large choix de cours"
- **Sous-titre** : Description des options disponibles

### Cartes de cours
Chaque carte contient :
- **Image de couverture** (ratio 16:9)
- **Titre du cours** (2 lignes maximum avec ellipsis)
- **Nom de l'instructeur** (lien cliquable)
- **Rating** : Étoiles + note numérique
- **Nombre d'avis** : Format "(X,XXX avis)"
- **Prix** : 
  - Prix barré (si promotion)
  - Prix actuel en gras
  - Badge "Bestseller" si applicable

### Layout responsive
- **Desktop** : 4-5 cours par rangée
- **Tablet** : 2-3 cours par rangée
- **Mobile** : 1-2 cours par rangée avec scroll horizontal

---

## 4. Section "Catégories populaires"

### Layout
```
[Titre] 
[Grid d'icônes 4x2 sur desktop]
```

### Contenu
- **Titre H2** : "Catégories les plus populaires"
- **Grid de catégories** avec icônes et labels :
  - 🖥️ Développement web
  - 📊 Data Science
  - 🎨 Design
  - 📈 Marketing
  - 💼 Business
  - 📸 Photographie
  - 🎵 Musique
  - 💪 Santé et fitness

### Spécifications
- **Hover effect** : Légère élévation et changement de couleur
- **Icônes** : Style uniforme, couleurs cohérentes
- **Responsive** : 2 colonnes sur mobile

---

## 5. Section "Étudiants qui consultent"

### Structure
- **Titre H2** : "Les étudiants consultent ces cours"
- **Filtres** : Boutons radio pour trier
  - Les plus populaires
  - Les mieux notés
  - Nouveaux
- **Carrousel de cours** : Navigation par flèches gauche/droite

### Fonctionnalités
- **Auto-play** : Défilement automatique optionnel
- **Pagination** : Points indicateurs
- **Touch/Swipe** : Support tactile sur mobile

---

## 6. Section "Instructeurs vedettes"

### Layout
```
[Titre]
[Grid 3x2 de profils instructeurs]
```

### Profils instructeurs
Chaque profil contient :
- **Photo** : Image ronde de l'instructeur
- **Nom** : Titre principal
- **Spécialisation** : Domaine d'expertise
- **Statistiques** :
  - Nombre d'étudiants
  - Nombre de cours
  - Note moyenne
- **Badge** : "Top instructor" si applicable

---

## 7. Section Témoignages

### Structure
- **Titre H2** : "Voyez ce que disent nos apprenants"
- **Carrousel de témoignages**
- **Logos d'entreprises** partenaires

### Témoignages
- **Citation** : Texte du témoignage
- **Photo** : Image de l'étudiant
- **Nom et titre** : Identité de la personne
- **Logo entreprise** : Si applicable

---

## 8. Section "Udemy Business"

### Contenu
- **Image** : Illustration corporate
- **Titre** : "Udemy Business"
- **Description** : Bénéfices pour les entreprises
- **CTA** : "Essayez Udemy Business"
- **Features** :
  - Formation d'équipe
  - Analytics
  - Support dédié

### Design
- **Background** : Couleur contrastante (gris clair)
- **Layout** : 50/50 image/texte sur desktop

---

## 9. Footer (Pied de page)

### Structure (4 colonnes)

#### Colonne 1 - Udemy Business
- Solutions pour entreprises
- Enseigner sur Udemy
- Obtenir l'application
- À propos de nous

#### Colonne 2 - Enseignement
- Devenir instructeur
- Règles des instructeurs
- Centre d'aide des instructeurs

#### Colonne 3 - Support
- À propos
- Carrières
- Blog
- Aide et support
- Partenaires affiliés

#### Colonne 4 - Légal
- Conditions d'utilisation
- Politique de confidentialité
- Plan du site
- Déclaration d'accessibilité

### Section inférieure
- **Sélecteur de langue** : Dropdown avec drapeaux
- **Logo Udemy** + Copyright
- **Réseaux sociaux** : Liens vers Facebook, Twitter, LinkedIn, etc.

---

## Spécifications techniques globales

### Couleurs principales
```css
--udemy-purple: #A435F0
--udemy-dark-purple: #8710D8
--text-primary: #1C1D1F
--text-secondary: #6A6F73
--background: #FFFFFF
--border: #D1D7DC
--success: #73C088
--warning: #F69C08
--error: #E1171A
```

### Typographie
- **Font family** : "sf pro display", -apple-system, BlinkMacSystemFont
- **H1** : 48px, font-weight: 700
- **H2** : 32px, font-weight: 700
- **H3** : 24px, font-weight: 700
- **Body** : 16px, font-weight: 400
- **Small** : 14px, font-weight: 400

### Breakpoints responsive
```css
/* Mobile */
@media (max-width: 767px) { }

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large desktop */
@media (min-width: 1200px) { }
```

### Animations
- **Transitions** : 0.3s ease-in-out
- **Hover effects** : Scale(1.02) et shadow
- **Loading states** : Skeleton screens
- **Scroll animations** : Fade-in on scroll

---

## Structure HTML recommandée

```html
<header class="main-header">
  <!-- Navigation principale -->
</header>

<main>
  <section class="hero-section">
    <!-- Bannière principale -->
  </section>
  
  <section class="featured-courses">
    <!-- Cours en vedette -->
  </section>
  
  <section class="popular-categories">
    <!-- Catégories populaires -->
  </section>
  
  <section class="trending-courses">
    <!-- Cours tendance -->
  </section>
  
  <section class="featured-instructors">
    <!-- Instructeurs vedettes -->
  </section>
  
  <section class="testimonials">
    <!-- Témoignages -->
  </section>
  
  <section class="udemy-business">
    <!-- Promotion Udemy Business -->
  </section>
</main>

<footer class="main-footer">
  <!-- Pied de page -->
</footer>
```

---

## Notes d'implémentation

### Performance
- **Images** : Format WebP avec fallback
- **Lazy loading** : Images hors viewport
- **Code splitting** : Chargement progressif du JS
- **CDN** : Assets statiques sur CDN

### Accessibilité
- **ARIA labels** : Navigation et interactions
- **Focus management** : Navigation au clavier
- **Alt texts** : Descriptions d'images
- **Color contrast** : Ratio WCAG AA minimum

### SEO
- **Schema markup** : Données structurées pour les cours
- **Meta descriptions** : Unique par page
- **H1-H6 hierarchy** : Structure sémantique
- **Internal linking** : Maillage interne optimisé

Cette structure modulaire permet une implémentation progressive et une maintenance facilitée de la page d'accueil Udemy.