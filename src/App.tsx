import React from 'react';
import { PDFViewer, Document, Page, View, Text, StyleSheet, Image, Link } from '@react-pdf/renderer';

import photo from '../public/photo.png';
import qrCode from '../public/portfolio.png';

const styles = StyleSheet.create({
  viewer: { width: '100%', height: '100vh', border: 'none' },
  page: { backgroundColor: '#FFFFFF', flexDirection: 'column', fontFamily: 'Helvetica' },

  // --- HEADER ---
  header: {
    flexDirection: 'row',
    backgroundColor: '#F9F9FB', 
    borderBottom: '1pt solid #E2E8F0',
    padding: '20 30',
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
    fontSize: 9,
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7D5BA6', 
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  statusTag: {
    fontSize: 10,
    color: '#D6A681',
    fontWeight: 'medium',
    marginBottom: 4,
  },
  searchDescription: {
    fontSize: 8.5,
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
  },
  bullet: {
    color: '#7D5BA6',
    fontSize: 10,
    marginRight: 3,
    fontWeight: 'bold',
  },
  contactText: {
    fontSize: 7.5,
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
    padding: 18,
    borderRight: '0.5pt solid #E2E8F0',
  },
  mainContent: {
    width: '68%',
    padding: 18,
  },

  // --- TYPOGRAPHIE ---
  sectionTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#7D5BA6',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginTop: 12,
    marginBottom: 6,
    borderBottom: '0.5pt solid #F3EBF7',
    paddingBottom: 2,
  },
  itemTitle: { fontSize: 10, fontWeight: 'bold', color: '#1A202C' },
  itemSub: { fontSize: 8, color: '#D6A681', marginBottom: 3, fontWeight: 'medium' },
  itemBody: { fontSize: 8.5, color: '#4A5568', lineHeight: 1.4, marginBottom: 8 },
  
  tagContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginBottom: 10 },
  tag: { 
    backgroundColor: '#F3EBF7', 
    color: '#7D5BA6', 
    fontSize: 8, 
    padding: '4 8', 
    borderRadius: 4,
    fontWeight: 'medium'
  }
  
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
          <Text style={styles.statusTag}>Étudiant Ingénieur ISEP</Text>
          <Text style={styles.searchDescription}>
            Étudiant en cycle ingénieur à l'Isep, je recherche une alternance de deux ans (septembre 2026 – août 2028) spécialisée en cybersécurité.
          </Text>
          
<View style={styles.contactGrid}>
            {/* Remplacement des emojis par des puces typographiques sûres */}
            <View style={styles.contactItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.contactText}>Paris, France</Text>
            </View>
            <View style={styles.contactItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.contactText}>+33 6 18 66 66 60</Text>
            </View>
            <View style={styles.contactItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.contactText}>samuel.saminathan@eleve.isep.fr</Text>
            </View>
            <View style={styles.contactItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.contactText}>linkedin.com/in/samuel-saminathan</Text>
            </View>
            <View style={styles.contactItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.contactText}>samuelsaminathan.github.io</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        {/* COLONNE GAUCHE (Compétences & Certifs) */}

        
        <View style={styles.sidebar}>
          <Text style={styles.sectionTitle}>Hard Skills</Text>
          <View style={styles.tagContainer}>
            {['Python', 'Java', 'C', 'SQL', 'Bash', 'Wireshark', 'Suricata', 'Wazuh', 'Kali Linux', 'React', 'Node.js'].map(s => (
              <Text key={s} style={styles.tag}>{s}</Text>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Soft Skills</Text>
          <Text style={styles.itemBody}>Esprit analytique, Rigueur, Communication, Adaptabilité, Travail en équipe.</Text>

          <Text style={styles.sectionTitle}>Langues</Text>
          <Text style={styles.itemBody}>Français : maternel{"\n"}Anglais : C1 (Courant){"\n"}Allemand : B1</Text>

          <Text style={styles.sectionTitle}>Certifications</Text>
          <Text style={styles.itemTitle}>TOEIC</Text>
          <Text style={styles.itemSub}>Score : 945/990 (Niveau C1)</Text>
          
          <Text style={styles.itemTitle}>CompTIA Security+</Text>
          <Text style={styles.itemSub}>En préparation</Text>

          <Text style={styles.itemTitle}>Certificat Voltaire</Text>
          <Text style={styles.itemSub}>Score : 707/1000</Text>

          <Text style={styles.itemTitle}>MOOC SecNumacadémie – ANSSI (2026)</Text>

          <Text style={styles.itemTitle}></Text>

          <Text style={styles.sectionTitle}>Centres d'intérêt</Text>
          <Text style={styles.itemBody}>Développement de jeux vidéo (Godot), Cinéma classique (A. Kurosawa), Dessin, Randonnée, Veille technologique.</Text>

          <View style={{ marginTop: 'auto', alignItems: 'center', paddingTop: 10 }}>
             <Image src={qrCode} style={{ width: 80, height: 80, border: '0.5pt solid #E2E8F0', borderRadius: 4 }} />
             <Text style={{ fontSize: 7, color: '#7D5BA6', marginTop: 4, textAlign: 'center' }}>Portfolio avec tous mes projets détaillés</Text>
          </View>
        </View>


        {/* COLONNE DROITE (Expériences & Formation) */}
        <View style={styles.mainContent}>

                    <Text style={styles.sectionTitle}>Formation</Text>
          <View>
            <Text style={styles.itemTitle}>ISEP - École d'ingénieurs du numérique</Text>
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

          
          <Text style={styles.sectionTitle}>Expériences Professionnelles</Text>
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

          <Text style={styles.sectionTitle}>Hackathons</Text>
          <View>
            <Text style={styles.itemTitle}>Silicon Days - Capgemini</Text>
            <Text style={styles.itemSub}>Sujet : L'IA avant,pendant et après un incident cyber</Text>
            <Text style={styles.itemBody}>
              • Développement d'un Auto-encodeur pour la détection d'anomalies avec Data Cleaning avancé pour l'entraînement avec données eBPF.{"\n"}
              • Corrélation via GNN pour le mapping MITRE ATT&CK et export SIEM vers Wazuh. {"\n"}
              • Technologies : PyTorch, Machine Learning, eBPF, Wazuh, SIEM.
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Projets personnels</Text>
          <View>
            <Text style={styles.itemTitle}>Formation en cybersécurité -- TryHackMe</Text>
            <Link src="https://tryhackme.com/p/Samuel404" style={{ ...styles.itemSub, color: '#7D5BA6', textDecoration: 'underline' }}>
              tryhackme.com/p/Samuel404
            </Link>
            <Text style={styles.itemBody}>
              Apprentissage pratique (SOC Level 1, Pre-Security) couvrant les frameworks (MITRE ATT&CK, Kill Chain) et l'utilisation d'outils d'analyse (Wireshark, Splunk, Zeek, Wazuh, SIEM, Forensics).
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