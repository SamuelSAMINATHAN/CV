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
    padding: '6 20', 
    alignItems: 'center',
    marginTop: '20pt',
  },
  photoContainer: {
    alignItems: 'center',
    width: 80,
  },
  photo: {
    width: 70,
    height: 70,
    borderRadius: 35, 
    border: '1.5pt solid #1E40AF',
    marginBottom: 4,
    objectFit: 'cover', 
    objectPosition: 'center',
  },
  nameSubtle: {
    fontSize: 9.5, 
    fontWeight: 'bold',
    color: '#3D3D3D',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  headerRight: {
    flex: 1,
    paddingLeft: 20,
  },
  searchTitle: {
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#1E40AF', 
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  statusTag: {
    fontSize: 10, 
    color: '#D6A681',
    fontWeight: 'medium',
    marginBottom: 3,
  },
  searchDescription: {
    fontSize: 9, 
    color: '#4A5568',
    marginBottom: 4, 
    lineHeight: 1.2,
    maxWidth: '95%',
  },
  
  // --- CONTACTS ---
  contactGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 8,
    rowGap: 2,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
  },
  contactIcon: {
    width: 9,
    height: 9,
    marginRight: 4,
  },
  bullet: {
    color: '#1E40AF',
    fontSize: 9,
    marginRight: 3,
    fontWeight: 'bold',
  },
  contactText: {
    fontSize: 8, 
    color: '#57606A',
  },

  // --- CORPS DU CV ---
  body: {
    flexDirection: 'row',
    flex: 1,
  },
sidebar: {
    width: '28%',
    backgroundColor: '#F9F9FB', 
    paddingTop: '4pt',
    paddingBottom: '4pt',
    // Augmentez cette valeur pour "pousser" le contenu vers la droite
    paddingLeft: '25pt', // Essayez 20pt ou 25pt selon ce que l'imprimante coupe
    paddingRight: '8pt', 
    borderRight: '0.5pt solid #E2E8F0',
  },
mainContent: {
  width: '75%',
  // On augmente significativement le padding de gauche pour "pousser" le texte
  paddingLeft: '20pt', 
  paddingRight: '10pt',
  paddingTop: '6pt',
},



  // --- TYPOGRAPHIE ---
  sectionTitle: {
    fontSize: 10.5, 
    fontWeight: 'bold',
    color: '#1E40AF',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
    marginTop: 4, 
    marginBottom: 2, 
    borderBottom: '0.5pt solid #F3EBF7',
    paddingBottom: 1,
  },
  itemTitle: { fontSize: 10.5, fontWeight: 'bold', color: '#1A202C' }, 
  itemSub: { fontSize: 8.5, color: '#D6A681', marginBottom: 1, fontWeight: 'medium' }, 
  itemBody: { fontSize: 8.5, color: '#4A5568', lineHeight: 1.25, marginBottom: 3 }, 
  
  tagContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 4, marginBottom: 4 }, 
  tag: { 
    backgroundColor: '#F3EBF7', 
    color: '#1E40AF', 
    fontSize: 7.5, 
    padding: '3 6', 
    borderRadius: 4,
    fontWeight: 'medium'
  },

  // --- NOUVEAUX STYLES COMPÉTENCES ---
  competenceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4, 
    marginTop: 4, 
  },
  competenceMainIcon: {
    width: 13,
    height: 13,
    marginRight: 6,
  },
  competenceCategory: {
    marginBottom: 6, 
  },
  skillCategoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1, 
  },
  skillCategoryIcon: {
    width: 11,
    height: 11,
    marginRight: 4,
  },
  skillCategoryTitle: {
    fontSize: 9, 
    fontWeight: 'bold',
    color: '#3D3D3D',
  },
  skillItem: {
    marginLeft: 14,
    marginBottom: 0,
  },
  skillLabel: {
    fontSize: 8, 
    fontWeight: 'bold',
    color: '#57606A',
  },
  skillValue: {
    fontSize: 8, 
    color: '#4A5568',
  },

  // --- STYLES POUR LES TITRES DE SECTION AVEC ICÔNES ---
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2, 
    marginBottom: 2, 
    borderBottom: '0.5pt solid #F3EBF7',
    paddingBottom: 2,
  },
  sidebarSectionHeader: { 
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8, 
    marginBottom: 3, 
    borderBottom: '0.5pt solid #F3EBF7',
    paddingBottom: 1,
  },
  sectionIcon: {
    width: 11,
    height: 11,
    marginRight: 5,
  },
  sectionTitleNoBorder: {
    fontSize: 10, 
    fontWeight: 'bold',
    color: '#1E40AF',
    textTransform: 'uppercase',
    letterSpacing: 1, 
  },

  // --- STRUCTURE EN ILOTS (CARDS) ---
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: '6 12',
    marginBottom: 8,
    border: '0.5pt solid #E2E8F0',
    borderBottom: '1.2pt solid #E2E8F0',
  },
  sectionCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  sectionIconBg: {
    backgroundColor: '#DBEAFE', 
    width: 20,
    height: 20,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  sectionIconWhite: {
    width: 11,
    height: 11,
  },
  sectionTitleMain: {
    fontSize: 10.5,
    fontWeight: 'bold',
    color: '#1A202C',
    textTransform: 'uppercase',
  },

  // --- TIMELINE INTERNE ---
  timelineContainer: {
    position: 'relative',
    paddingLeft: 18,
    paddingTop: 4,
  },
  timelineLine: {
    position: 'absolute',
    left: 7,
    top: 12,
    bottom: 8,
    width: 1.2,
    backgroundColor: '#1E40AF', 
    opacity: 0.2,
  },
  timelineEvent: {
    position: 'relative',
    marginBottom: 8,
  },
  timelineDot: {
    position: 'absolute',
    left: -15,
    top: 2,
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#1E40AF',
    border: '1.5pt solid #FFFFFF',
    zIndex: 1,
  },
  itemDateTag: {
    backgroundColor: '#F1F5F9',
    borderRadius: 8,
    padding: '1 6',
    flexDirection: 'row',
    alignItems: 'center',
    border: '0.5pt solid #E2E8F0',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  itemDateText: {
    fontSize: 7,
    color: '#64748B',
    fontWeight: 'medium',
  },

  // --- STYLES POUR LES LOGOS D'ENTREPRISE/ÉCOLE ---
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginBottom: 1,
  },
  logo: {
    width: 24, 
    height: 24, 
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
          <Text style={styles.searchTitle}>Ingénieur en Cybersécurité</Text>
          <Text style={styles.statusTag}>Recherche alternance de deux ans (septembre 2026 – août 2028)</Text> 
          <Text style={styles.statusTag}>Rythme 3 jours en entreprise et 2 jours en formation</Text>
          
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
              <Text><Text style={styles.skillLabel}>Langages : </Text><Text style={styles.skillValue}>Python, C, Rust, Java, PHP, SQL</Text></Text>
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
              <Text><Text style={styles.skillLabel}>Relationnel : </Text><Text style={styles.skillValue}>Travail en équipe, Communication, Organisation</Text></Text>
            </View>
            <View style={styles.skillItem}>
              <Text><Text style={styles.skillLabel}>Adaptabilité : </Text><Text style={styles.skillValue}>Fiabilité, Autonome</Text></Text>
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

          <Text style={styles.itemTitle}>Certificat Voltaire</Text>
          <Text style={styles.itemSub}>Score : 707/1000</Text>

          <Text style={styles.itemTitle}>MOOC SecNumacadémie – ANSSI (2026)</Text>

          <View style={styles.sidebarSectionHeader}>
            <Image src={iconHobbys} style={styles.sectionIcon} />
            <Text style={styles.sectionTitleNoBorder}>Centres d'intérêt</Text>
          </View>
          <Text style={styles.itemBody}>Développement de jeux vidéo (Godot), Cinéma classique (A. Kurosawa), Dessin, Randonnée, Veille technologique.</Text>

          <View style={{ marginTop: '10pt', alignItems: 'center', paddingTop: 10 }}>
             <Image src={qrCode} style={{ width: 80, height: 80, border: '0.5pt solid #E2E8F0', borderRadius: 4 }} />
             <Text style={{ fontSize: 7, color: '#1E40AF', marginTop: 4, textAlign: 'center' }}>Portfolio avec tous mes projets détaillés</Text>
          </View>
        </View>


        {/* COLONNE DROITE (Main Content avec Ilots) */}
        <View style={styles.mainContent}>

          {/* SECTION FORMATION */}
          <View style={styles.sectionCard}>
            <View style={styles.sectionCardHeader}>
              <View style={styles.sectionIconBg}>
                <Image src={iconFormation} style={styles.sectionIconWhite} />
              </View>
              <Text style={styles.sectionTitleMain}>Formation</Text>
            </View>

            <View style={styles.timelineContainer}>
              <View style={styles.timelineLine} />
              
              <View style={styles.timelineEvent}>
                <View style={styles.timelineDot} />
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>ISEP - École d'ingénieurs du numérique</Text>
                  <Image src={logoIsep} style={styles.logo} />
                </View>
                <Text style={styles.itemSub}>Cycle Ingénieur • Paris 2023 - 2028</Text>
                <Text style={styles.itemBody}>
                  Formation d’ingénieur généraliste du numérique incluant le développement Web, l'algorithmique, réseaux(CISCO/CCNA), la cybersécurité et l'électronique, complétée par une solide base en gestion de projet et sciences des données. Projet notable : 
                </Text>
                <View style={{ marginLeft: 8, marginTop: 4 }}>
                                 <Text style={styles.itemTitle}>• Laboratoire Simulation DDoS & Détection</Text>
                  <Text style={{ ...styles.itemBody, marginBottom: 2 }}>Simulation et détection d’attaques variées : Portscan, Protocolaires (SYN flooding, Teardrop), Applicatives (HTTP Floods, Slowloris) et Amplification/Réflexion (DNS). Analyse via Suricata et Wazuh.</Text>

                  <Text style={styles.itemTitle}>• Site Web Logement Étudiant avec 2FA</Text>
                  <Text style={{ ...styles.itemBody, marginBottom: 2 }}>Plateforme PHP/HTML/CSS intégrant une authentification à deux facteurs.</Text>
                </View>
              </View>

              <View style={styles.timelineEvent}>
                <View style={styles.timelineDot} />
                <View style={styles.itemDateTag}><Text style={styles.itemDateText}>2021</Text></View>
                <Text style={styles.itemTitle}>Baccalauréat Général - Lycée L’ÉSPERANCE</Text>
                <Text style={styles.itemBody}>Mention Assez Bien. Spécialités : SVT, Physique-Chimie, Maths complémentaires.</Text>
              </View>
            </View>
          </View>

          {/* SECTION EXPÉRIENCES */}
          <View style={styles.sectionCard}>
            <View style={styles.sectionCardHeader}>
              <View style={styles.sectionIconBg}>
                <Image src={iconPro} style={styles.sectionIconWhite} />
              </View>
              <Text style={styles.sectionTitleMain}>Expériences</Text>
            </View>

            <View style={styles.timelineContainer}>
              <View style={styles.timelineLine} />



<View style={styles.timelineEvent}>
                <View style={styles.timelineDot} />
                <View style={styles.itemDateTag}><Text style={styles.itemDateText}>Fév 2022 - Août 2022</Text></View>
                <Text style={styles.itemTitle}>Agent de comptoir - TTEUROPE / Western Union</Text>
                <Text style={styles.itemSub}>Paris - Gare du Nord</Text>
                
                <Text style={styles.itemBody}>
                  • Gestion de flux financiers et relation client complexe : Accueil d'une clientèle internationale (flux de 40 à 100+ pers./jour), gestion des transferts Western Union et sécurisation des fonds (vérification manuelle de l'authenticité des billets).
                </Text>
                
                <Text style={styles.itemBody}>
                  • Médiation et Sang-froid : Résolution de situations critiques et conflictuelles (blocages de fonds, erreurs de saisie) en servant d'interface entre le service client et les usagers.
                </Text>
                
                <Text style={styles.itemBody}>
                  • Support administratif et linguistique (Anglais C1) : Rédaction de courriers officiels (impôts, gouvernement) et de CV pour les clients; Traducteur technique pour le pôle réparation mobile.
                </Text>
                
                <Text style={styles.itemBody}>
                  • Initiative et Vente : Conseil client personnalisé sur les produits téléphoniques et création de supports de communication visuelle (Paint.net) pour augmenter la visibilité des services de la boutique.
                </Text>
              </View>
            </View>
          </View>

          {/* SECTION HACKATHONS & PROJETS */}
          <View style={styles.sectionCard}>
            <View style={styles.sectionCardHeader}>
              <View style={styles.sectionIconBg}>
                <Image src={iconCompetence} style={styles.sectionIconWhite} />
              </View>
              <Text style={styles.sectionTitleMain}>Hackathons et Projets</Text>
            </View>

            <View style={styles.timelineContainer}>
              <View style={styles.timelineLine} />

              <View style={styles.timelineEvent}>
                <View style={styles.timelineDot} />
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>Silicon Days - Capgemini </Text>
                  <Image src={logoCapgemini} style={styles.logo} />
                </View>
                <Text style={styles.itemBody}>
                  • Développement d'un Auto-encodeur pour la détection d'anomalies (eBPF).{"\n"}
                  • Corrélation via GNN pour le mapping MITRE ATT&CK et export SIEM vers Wazuh. {"\n"}
                  • Technologies : PyTorch, Machine Learning, eBPF, Wazuh, SIEM.
                </Text>
              </View>

<View style={styles.timelineEvent}>
                <View style={styles.timelineDot} />
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>Formation en cybersécurité - TryHackMe</Text>
                  <Image src={logoTryHackMe} style={styles.logo} />
                </View>
                <Link src="https://tryhackme.com/p/Samuel404" style={{ ...styles.itemSub, color: '#1E40AF', textDecoration: 'underline' }}>
                  tryhackme.com/p/Samuel404
                </Link>
                <Text style={styles.itemBody}>
                  Niveau Saphir (Top 1%), 15 badges, 86 machines complétées.SOC Level 1 et Pre-Security.
                </Text>
              </View>


             <View style={styles.timelineEvent}>
                <View style={styles.timelineDot} />
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>Extraction de mots de passe Wi-Fi - Rust (Windows)</Text>
                  <Image src={logoRust} style={styles.logo} />
                </View>
                <Text style={styles.itemBody}>
                  • Extraction de données système : Accès à l'API native Windows (WlanGetProfile) pour récupérer les profils réseau enregistrés.{"\n"}
                  • Parsing & Sécurité : Conception d'un moteur d'analyse XML sécurisé pour extraire et décoder les clés WPA2 des fichiers de configuration système.
                </Text>
              </View>
            </View>
          </View>
          
        </View>
      </View>
    </Page>
  </Document>
);

export default function App() {
  return <PDFViewer style={styles.viewer}><MyCV /></PDFViewer>;
}