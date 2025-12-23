
import { Service, Project, Testimonial, FAQItem } from './types';

export const COLORS = {
  wood: '#8B5E3C',
  navy: '#1E3A8A',
  slate: '#64748B',
  gold: '#D4AF37',
};

export const SERVICES: Service[] = [
  {
    id: 'renovation-charpente',
    title: 'Rénovation de Charpente',
    description: 'Expertise complète pour redonner vie et solidité à vos structures en bois.',
    longDescription: 'Nous intervenons sur tous types de charpentes anciennes pour diagnostiquer et réparer les éléments structurels affaiblis. Notre savoir-faire artisanal garantit la pérennité de votre patrimoine.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200',
    price: 'Sur devis'
  },
  {
    id: 'charpentier-couvreur',
    title: 'Charpentier Couvreur',
    description: 'Pose de toiture et charpente neuve avec une finition irréprochable.',
    longDescription: 'De la conception à la pose, nous réalisons des charpentes traditionnelles et industrielles. Nous assurons également l\'étanchéité et la couverture de votre bâtiment.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200',
    price: 'Sur devis'
  },
  {
    id: 'traitement-bois',
    title: 'Traitement de Charpente',
    description: 'Protection préventive et curative contre les nuisibles et l\'humidité.',
    longDescription: 'Injection et pulvérisation de produits certifiés pour protéger votre bois contre les termites, capricornes et champignons lignivores.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185138a04b9?q=80&w=1200',
    price: 'À partir de 15€/m²'
  },
  {
    id: 'vente-bois',
    title: 'Vente de Bois de Charpente',
    description: 'Sélection rigoureuse de bois de qualité pour vos projets personnels.',
    longDescription: 'Nous proposons une large gamme d\'essences de bois (chêne, sapin, douglas) débitées sur mesure pour vos besoins en construction ou menuiserie.',
    image: 'https://images.unsplash.com/photo-1582234372722-50d7ccc30e5a?q=80&w=1200'
  },
  {
    id: 'restauration-monuments',
    title: 'Restauration de Charpentes',
    description: 'Intervention spécialisée sur des bâtiments historiques et patrimoniaux.',
    longDescription: 'Techniques ancestrales de taille de bois pour restaurer les charpentes complexes des édifices classés ou des mas anciens.',
    image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1200'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Rénovation Mas de Valras',
    category: 'renovation',
    imageBefore: 'https://images.unsplash.com/photo-1449156001437-3a14417382f6?q=80&w=800',
    imageAfter: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800',
    description: 'Transformation complète d\'une grange abandonnée en loft moderne tout en préservant la charpente apparente.'
  },
  {
    id: 'p2',
    title: 'Charpente Villa Contemporaine',
    category: 'charpente',
    imageBefore: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=800',
    imageAfter: 'https://images.unsplash.com/photo-1580587767513-39982348a58e?q=80&w=800',
    description: 'Installation d\'une charpente en bois lamellé-collé pour une portée de 12 mètres sans poteaux.'
  },
  {
    id: 'p3',
    title: 'Restauration Clocher Village',
    category: 'charpente',
    imageBefore: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800',
    imageAfter: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=800',
    description: 'Remplacement partiel des poutres maîtresses d\'un clocher du XVIIIème siècle.'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer: "Nous acceptons les virements bancaires, les chèques et les règlements par carte bancaire. Des facilités de paiement peuvent être envisagées pour les gros travaux."
  },
  {
    question: "Quels types de bois utilisez-vous ?",
    answer: "Nous privilégions les essences locales comme le Chêne, le Châtaignier ou le Douglas certifié PEFC, garantissant solidité et respect de l'environnement."
  },
  {
    question: "Combien de temps prend une rénovation ?",
    answer: "Cela dépend de l'ampleur du projet. Une rénovation partielle prend généralement 1 à 2 semaines, tandis qu'une réfection complète de charpente peut durer de 3 à 5 semaines."
  },
  {
    question: "Proposez-vous des traitements anti-termite ?",
    answer: "Oui, nous sommes spécialisés dans les traitements curatifs par injection et préventifs par pulvérisation avec des produits homologués CTB-P+."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', name: 'Jean-Pierre M.', rating: 5, comment: "Un travail d'orfèvre sur notre charpente ancienne. Équipe ponctuelle et chantier très propre.", date: "12 Mars 2024" },
  { id: 't2', name: 'Sophie L.', rating: 5, comment: "Très satisfaite de la rénovation de ma toiture. Conseils précieux et respect du devis initial.", date: "02 Février 2024" },
  { id: 't3', name: 'Marc D.', rating: 4, comment: "Professionnels sérieux. Je recommande pour tout ce qui touche au bois et à la maçonnerie.", date: "20 Janvier 2024" }
];
