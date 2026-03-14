import React from 'react';
import { PDFViewer, Document, Page, View, Text, StyleSheet, Image, Link } from '@react-pdf/renderer';

import photo from '../public/photo.png';
import qrCode from '../public/portfolio.png';

// Importation des icônes
import iconBureau from '../public/icons/bureau.png';
import iconCompetence from '../public/icons/competence.png';
import iconDev from '../public/icons/dev.png';
import iconReseaux from '../public/icons/reseaux.png';
import iconSoftSkills from '../public/icons/softskills.png';

// Importation des nouvelles icônes
import iconCertif from '../public/icons/certif.png';
import iconFormation from '../public/icons/formation.png';
import iconHobbys from '../public/icons/hobbys.png';
import iconLangue from '../public/icons/langue.png';
import iconPro from '../public/icons/pro.png';

// Logos spécifiques
import logoIsep from '../public/icons/logo_isep.png';
import logoCapgemini from '../public/icons/Capgemini_Logo.svg.png';
import logoTryHackMe from '../public/icons/Plateforme_TryHackMe.png';
import logoRust from '../public/icons/Rust_programming_language_black_logo.svg.png';

// Importation des icônes de contact
import iconEmail from '../public/icons/email.png';
import iconLink from '../public/icons/link.png';
import iconLocation from '../public/icons/location.png';
import iconPhone from '../public/icons/phone.png';
import iconPort from '../public/icons/port.png';

const styles = StyleSheet.create({
  viewer: { width: '100%', height: '100vh', border: 'none' },
  page: { backgroundColor: '#FFFFFF', flexDirection: 'column', fontFamily: 'Helvetica' },

  // --- HEADER ---
  header: {
    flexDirection: 'row',
    backgroundColor: '#F9F9FB', 
    borderBottom: '1pt solid #E2E8F0',
    padding: '15 30', // Réduit de 20 à 15
    alignItems: 'center',
  },
  photoContainer: {
    alignItems: 'center',
    width: 90,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 40, // Moitié de la taille pour un cercle parfait
    border: '1.5pt solid #7D5BA6',
    marginBottom: 5,
    // --- LES DEUX LIGNES CI-DESSOUS RÉPARENT TA PHOTO ---
    objectFit: 'cover', 
    objectPosition: 'center',
  },
  nameSubtle: {
    fontSize: 9.5, // Augmenté de 9 à 9.5
    fontWeight: 'bold',
    color: '#3D3D3D',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  headerRight: {
    flex: 1,
    paddingLeft: 25,
  },
  searchTitle: {
    fontSize: 19, // Augmenté de 18 à 19
    fontWeight: 'bold',
    color: '#7D5BA6', 
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  statusTag: {
    fontSize: 10.5, // Augmenté de 10 à 10.5
    color: '#D6A681',
    fontWeight: 'medium',
    marginBottom: 4,
  },
  searchDescription: {
    fontSize: 9, // Augmenté de 8.5 à 9
    color: '#4A5568',
    marginBottom: 8,
    lineHeight: 1.3,
    maxWidth: '90%',
  },
  
  // --- CONTACTS ---
  contactGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 10,
    rowGap: 4,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  contactIcon: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
  bullet: {
    color: '#7D5BA6',
    fontSize: 10,
    marginRight: 3,
    fontWeight: 'bold',
  },
  contactText: {
    fontSize: 8, // Augmenté de 7.5 à 8
    color: '#57606A',
  },

  // --- CORPS DU CV ---
  body: {
    flexDirection: 'row',
    flex: 1,
  },
  sidebar: {
    width: '32%',
    backgroundColor: '#F9F9FB', 
    padding: '10 18', // Réduit de 12 à 10
    borderRight: '0.5pt solid #E2E8F0',
  },
  mainContent: {
    width: '68%',
    padding: '10 18', // Réduit de 12 à 10
  },

  // --- TYPOGRAPHIE ---
  sectionTitle: {
    fontSize: 10.5, // Augmenté de 10 à 10.5
    fontWeight: 'bold',
    color: '#7D5BA6',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginTop: 8, 
    marginBottom: 4, 
    borderBottom: '0.5pt solid #F3EBF7',
    paddingBottom: 2,
  },
  itemTitle: { fontSize: 10.5, fontWeight: 'bold', color: '#1A202C' }, // Augmenté de 10 à 10.5
  itemSub: { fontSize: 8.5, color: '#D6A681', marginBottom: 2, fontWeight: 'medium' }, // Augmenté de 8 à 8.5
  itemBody: { fontSize: 8.5, color: '#4A5568', lineHeight: 1.4, marginBottom: 6 }, // Augmenté de 8 à 8.5
  
  tagContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginBottom: 10 },
  tag: { 
    backgroundColor: '#F3EBF7', 
    color: '#7D5BA6', 
    fontSize: 8, 
    padding: '4 8', 
    borderRadius: 4,
    fontWeight: 'medium'
  },

  // --- NOUVEAUX STYLES COMPÉTENCES ---
  competenceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8, 
    marginTop: 8, // Réduit de 10 à 8
  },
  competenceMainIcon: {
    width: 15,
    height: 15,
    marginRight: 6,
  },
  competenceCategory: {
    marginBottom: 10, 
  },
  skillCategoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4, 
  },
  skillCategoryIcon: {
    width: 12,
    height: 12,
    marginRight: 4,
  },
  skillCategoryTitle: {
    fontSize: 9, // Augmenté de 8.5 à 9
    fontWeight: 'bold',
    color: '#3D3D3D',
  },
  skillItem: {
    marginLeft: 16,
    marginBottom: 1,
  },
  skillLabel: {
    fontSize: 8, // Augmenté de 7.5 à 8
    fontWeight: 'bold',
    color: '#57606A',
  },
  skillValue: {
    fontSize: 8, // Augmenté de 7.5 à 8
    color: '#4A5568',
  },

  // --- STYLES POUR LES TITRES DE SECTION AVEC ICÔNES ---
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3, // Réduit de 4 à 3
    marginBottom: 2, 
    borderBottom: '0.5pt solid #F3EBF7',
    paddingBottom: 2,
  },
  sidebarSectionHeader: { 
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14, // Réduit de 18 à 14 pour gagner de l'espace pour le texte plus grand
    marginBottom: 6,
    borderBottom: '0.5pt solid #F3EBF7',
    paddingBottom: 2,
  },
  sectionIcon: {
    width: 12,
    height: 12,
    marginRight: 5,
  },
  sectionTitleNoBorder: {
    fontSize: 10, // Augmenté de 9.5 à 10
    fontWeight: 'bold',
    color: '#7D5BA6',
    textTransform: 'uppercase',
    letterSpacing: 1.1, 
  },

  // --- STYLES POUR LES LOGOS D'ENTREPRISE/ÉCOLE ---
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Logos à droite
    marginBottom: 2,
  },
  logo: {
    width: 32, // Agrandissement de 22 à 32
    height: 32, // Agrandissement de 22 à 32
    marginLeft: 8,
    objectFit: 'contain',
  },
  
});

const MyCV = () => (
  <Document title="CV - SAMUEL SAMINATHAN">
    <Page size="A4" style={styles.page}>
      
      {/* HEADER : Photo + Titre de recherche + Contacts */}
      <View style={styles.header}>
        <View style={styles.photoContainer}>
          {/* Utilisation de l'image importée */}
          <Image style={styles.photo} src={photo} />
          <Text style={styles.nameSubtle}>Samuel{"\n"}Saminathan</Text>
        </View>
        
        <View style={styles.headerRight}>
          <Text style={styles.searchTitle}>Analyste Cyber (SOC / Pentest)</Text>
          <Text style={styles.statusTag}>Recherche alternance de deux ans (septembre 2026 – août 2028)</Text>
          <Text style={styles.searchDescription}>
          Passionné par la cybersécurité et par l'informatique, je suis un étudiant motivé, rigoureux et prêt à m'investir pleinement pour relever de nouveaux défis.

          </Text>
          
          <View style={styles.contactGrid}>
            <View style={styles.contactItem}>
                <Image style={styles.contactIcon} src={iconLocation} />
                <Text style={styles.contactText}>Paris, Île-de-France</Text>
            </View>
            <View style={styles.contactItem}>
                <Image style={styles.contactIcon} src={iconPhone} />
                <Text style={styles.contactText}>+33 6 18 66 66 60</Text>
            </View>
            <View style={styles.contactItem}>
                <Image style={styles.contactIcon} src={iconEmail} />
                <Text style={styles.contactText}>samuel.saminathan@eleve.isep.fr</Text>
            </View>
            <View style={styles.contactItem}>
                <Image style={styles.contactIcon} src={iconLink} />
                <Text style={styles.contactText}>linkedin.com/in/samuel-saminathan</Text>
            </View>
            <View style={styles.contactItem}>
                <Image style={styles.contactIcon} src={iconPort} />
                <Text style={styles.contactText}>samuelsaminathan.github.io</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        {/* COLONNE GAUCHE (Compétences & Certifs) */}

        
        <View style={styles.sidebar}>
          {/* Section Compétences avec icône principale */}
          <View style={styles.competenceHeader}>
            <Image src={iconCompetence} style={styles.competenceMainIcon} />
            <Text style={styles.sectionTitle}>Compétences</Text>
          </View>

          {/* Systèmes & Réseaux */}
          <View style={styles.competenceCategory}>
            <View style={styles.skillCategoryHeader}>
              <Image src={iconReseaux} style={styles.skillCategoryIcon} />
              <Text style={styles.skillCategoryTitle}>Systèmes & Réseaux</Text>
            </View>
            <View style={styles.skillItem}>
              <Text><Text style={styles.skillLabel}>OS : </Text><Text style={styles.skillValue}>Linux, Bash, PowerShell, VirtualBox</Text></Text>
            </View>
            <View style={styles.skillItem}>
              <Text><Text style={styles.skillLabel}>Sécurité & Réseau : </Text><Text style={styles.skillValue}>Wireshark, Wazuh, pfSense</Text></Text>
            </View>
          </View>

          {/* Développement */}
          <View style={styles.competenceCategory}>
            <View style={styles.skillCategoryHeader}>
              <Image src={iconDev} style={styles.skillCategoryIcon} />
              <Text style={styles.skillCategoryTitle}>Développement</Text>
            </View>
            <View style={styles.skillItem}>
              <Text><Text style={styles.skillLabel}>Langages : </Text><Text style={styles.skillValue}>Python, Rust, Java, PHP, SQL</Text></Text>
            </View>
            <View style={styles.skillItem}>
              <Text><Text style={styles.skillLabel}>Web : </Text><Text style={styles.skillValue}>React, HTML, CSS</Text></Text>
            </View>
          </View>

          {/* Bureautique & Outils */}
          <View style={styles.competenceCategory}>
            <View style={styles.skillCategoryHeader}>
              <Image src={iconBureau} style={styles.skillCategoryIcon} />
              <Text style={styles.skillCategoryTitle}>Bureautique & Outils</Text>
            </View>
            <View style={styles.skillItem}>
              <Text><Text style={styles.skillLabel}>Logiciels : </Text><Text style={styles.skillValue}>Suite Office, LaTeX</Text></Text>
            </View>
          </View>

          {/* Soft Skills */}
          <View style={styles.competenceCategory}>
            <View style={styles.skillCategoryHeader}>
              <Image src={iconSoftSkills} style={styles.skillCategoryIcon} />
              <Text style={styles.skillCategoryTitle}>Soft Skills</Text>
            </View>
            <View style={styles.skillItem}>
              <Text><Text style={styles.skillLabel}>Analyse : </Text><Text style={styles.skillValue}>Esprit analytique, Rigueur, Curiosité</Text></Text>
            </View>
            <View style={styles.skillItem}>
              <Text><Text style={styles.skillLabel}>Relationnel : </Text><Text style={styles.skillValue}>Travail en équipe, Communication</Text></Text>
            </View>
            <View style={styles.skillItem}>
              <Text><Text style={styles.skillLabel}>Adaptabilité : </Text><Text style={styles.skillValue}>Fiabilité, Adaptabilité</Text></Text>
            </View>
          </View>

          <View style={styles.sidebarSectionHeader}>
            <Image src={iconLangue} style={styles.sectionIcon} />
            <Text style={styles.sectionTitleNoBorder}>Langues</Text>
          </View>
          <Text style={styles.itemBody}>Français : maternel{"\n"}Anglais : C1 (Courant){"\n"}Allemand : B1</Text>

          <View style={styles.sidebarSectionHeader}>
            <Image src={iconCertif} style={styles.sectionIcon} />
            <Text style={styles.sectionTitleNoBorder}>Certifications</Text>
          </View>
          <Text style={styles.itemTitle}>TOEIC</Text>
          <Text style={styles.itemSub}>Score : 945/990 (Niveau C1)</Text>
          
          <Text style={styles.itemTitle}>CompTIA Security+</Text>
          <Text style={styles.itemSub}>En préparation</Text>

          <Text style={styles.itemTitle}>Certificat Voltaire</Text>
          <Text style={styles.itemSub}>Score : 707/1000</Text>

          <Text style={styles.itemTitle}>MOOC SecNumacadémie – ANSSI (2026)</Text>

          <Text style={styles.itemTitle}></Text>

          <View style={styles.sidebarSectionHeader}>
            <Image src={iconHobbys} style={styles.sectionIcon} />
            <Text style={styles.sectionTitleNoBorder}>Centres d'intérêt</Text>
          </View>
          <Text style={styles.itemBody}>Développement de jeux vidéo (Godot), Cinéma classique (A. Kurosawa), Dessin, Randonnée, Veille technologique.</Text>

          <View style={{ marginTop: 'auto', alignItems: 'center', paddingTop: 10 }}>
             <Image src={qrCode} style={{ width: 80, height: 80, border: '0.5pt solid #E2E8F0', borderRadius: 4 }} />
             <Text style={{ fontSize: 7, color: '#7D5BA6', marginTop: 4, textAlign: 'center' }}>Portfolio avec tous mes projets détaillés</Text>
          </View>
        </View>


        {/* COLONNE DROITE (Expériences & Formation) */}
        <View style={styles.mainContent}>

          <View style={styles.sectionHeader}>
            <Image src={iconFormation} style={styles.sectionIcon} />
            <Text style={styles.sectionTitleNoBorder}>Formation</Text>
          </View>
          <View>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>ISEP - École d'ingénieurs du numérique</Text>
              <Image src={logoIsep} style={styles.logo} />
            </View>
            <Text style={styles.itemSub}>Cycle Ingénieur • 2023 - 2028</Text>
            <View style={{ marginLeft: 8, marginTop: 4 }}>
              <Text style={styles.itemTitle}>• Laboratoire Simulation DDoS & Détection</Text>
              <Text style={{ ...styles.itemBody, marginBottom: 2 }}>Simulation d'attaques (L3-L7) sur réseau isolé (Kali, Metasploitable) avec détection via Suricata et Wazuh.</Text>

              <Text style={styles.itemTitle}>• Encryptor AES-256 (Langage C)</Text>
              <Text style={{ ...styles.itemBody, marginBottom: 2 }}>Outil de chiffrement/déchiffrement de fichiers garantissant la confidentialité des données.</Text>

              <Text style={styles.itemTitle}>• Portefeuille Numérique (Java)</Text>
              <Text style={{ ...styles.itemBody, marginBottom: 2 }}>Application de gestion de portefeuille avec historique de transactions sécurisées.</Text>

              <Text style={styles.itemTitle}>• Site Web Logement Étudiant avec 2FA</Text>
              <Text style={{ ...styles.itemBody, marginBottom: 2 }}>Plateforme PHP/HTML/CSS intégrant une authentification à deux facteurs.</Text>
            </View>
            
            <Text style={styles.itemTitle}>Baccalauréat Général - Lycée L’ÉSPERANCE</Text>
            <Text style={styles.itemSub}>2021</Text>
            <Text style={styles.itemBody}>Mention Assez Bien. Spécialités : SVT, Physique-Chimie, Maths complémentaires.</Text>
          </View>

          
          <View style={styles.sectionHeader}>
            <Image src={iconPro} style={styles.sectionIcon} />
            <Text style={styles.sectionTitleNoBorder}>Expériences Professionnelles</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>Développeur Web (Stage) - Cokomasala</Text>
            <Text style={styles.itemSub}>Inde</Text>
            <Text style={styles.itemBody}>
              • Conception et développement d'un site vitrine pour l'entreprise.{"\n"}
              • Technologies : HTML, CSS, JavaScript et intégration de contenu.
            </Text>

            <Text style={styles.itemTitle}>Guichetier - TTEUROPE / Western Union</Text>
            <Text style={styles.itemSub}>Fév. 2022 - Août 2023 • Paris</Text>
            <Text style={styles.itemBody}>
              • Traitement des transferts internationaux via la plateforme Western Union.{"\n"}
              • Manipulation de données sensibles et gestion d’incidents opérationnels.
            </Text>
          </View>

          <View style={styles.sectionHeader}>
            <Image src={iconPro} style={styles.sectionIcon} />
            <Text style={styles.sectionTitleNoBorder}>Hackathons</Text>
          </View>
          <View>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>Silicon Days - Capgemini</Text>
              <Image src={logoCapgemini} style={styles.logo} />
            </View>
            <Text style={styles.itemSub}>Sujet : L'IA avant,pendant et après un incident cyber</Text>
            <Text style={styles.itemBody}>
              • Développement d'un Auto-encodeur pour la détection d'anomalies avec Data Cleaning avancé pour l'entraînement avec données eBPF.{"\n"}
              • Corrélation via GNN pour le mapping MITRE ATT&CK et export SIEM vers Wazuh. {"\n"}
              • Technologies : PyTorch, Machine Learning, eBPF, Wazuh, SIEM.
            </Text>
          </View>

          <View style={styles.sectionHeader}>
            <Image src={iconCompetence} style={styles.sectionIcon} />
            <Text style={styles.sectionTitleNoBorder}>Projets personnels</Text>
          </View>
          <View>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>Formation en cybersécurité -- TryHackMe</Text>
              <Image src={logoTryHackMe} style={styles.logo} />
            </View>
            <Link src="https://tryhackme.com/p/Samuel404" style={{ ...styles.itemSub, color: '#7D5BA6', textDecoration: 'underline' }}>
              tryhackme.com/p/Samuel404
            </Link>
            <Text style={styles.itemBody}>
              Apprentissage pratique (SOC Level 1, Pre-Security) couvrant les frameworks (MITRE ATT&CK, Kill Chain) et l'utilisation d'outils d'analyse (Wireshark, Splunk, Zeek, Wazuh, SIEM, Forensics).
            </Text>
          </View>

          <View>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>Programmation Système Rust -- Google (Comprehensive Rust)</Text>
              <Image src={logoRust} style={styles.logo} />
            </View>
            <Link src="https://google.github.io/comprehensive-rust/" style={{ ...styles.itemSub, color: '#7D5BA6', textDecoration: 'underline' }}>
              google.github.io/comprehensive-rust
            </Link>
            <Text style={styles.itemBody}>
              Formation intensive sur la sécurité mémoire (Ownership, Borrowing), la gestion des ressources et la programmation concurrente sécurisée. Application des standards de développement utilisés chez Google pour les systèmes critiques.
            </Text>
          </View>
          
          
        </View>
      </View>
    </Page>
  </Document>
);

export default function App() {
  return <PDFViewer style={styles.viewer}><MyCV /></PDFViewer>;
}