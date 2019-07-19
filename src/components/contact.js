import React, { Component } from "react";
 
class Contact extends Component {
        render() {
          return (
            <div>
              <title>LiLiT - Contacts</title>
              <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
              <meta name="Description" content="Site du groupe LiLiT (Liège Linux Team)" />
              <meta name="Keywords" content="Linux GNU Liège OS LUG" />
              <link rel="stylesheet" href="style.css" type="text/css" />
              <link rel="stylesheet" href="themes/fullcircle/theme.css" type="text/css" />
              <link rel="icon" href="favicon.ico" type="image/x-ico" />
              <link rel="shortcut icon" href="favicon.ico" type="image/x-ico" />
              <div className="main">
                <a name="haut" />
                <table style={{width: '100%'}} cellSpacing={0} cellPadding={0}>
                  <tbody><tr>
                      <td className="bordure-tl-e" />
                      <td className="bordure-h-e" width={175} />
                      <td className="bordure-t-tbl" />
                      <td className="bordure-h-t" />
                      <td className="bordure-tr-tr" />
                    </tr>
                    <tr>
                      <td className="bordure-v-e" />
                      <td rowSpan={2} className="tchantchux">
                        <a href="index.php?page=tchantchux"><img src="images/tchantchux.png" alt="Tchantchux: la mascotte du LUG" className="general" /></a>
                      </td>
                      <td className="bordure-v-l" />
                      <td className="topbar">
                        <h1>Bienvenue sur le site de LiLiT : Liege Linux Team</h1>
                      </td>
                      <td className="bordure-v-r" />
                    </tr>
                    <tr>
                      <td className="bordure-v-e" />
                      {/*il y en a une ici (rowspan de tchantchux)*/}
                      <td className="bordure-v-l" />
                      <td className="topbar">
                        <table style={{width: '100%'}}>
                       
                          <h1>Comment nous contacter?</h1>
                          <br /><div style={{textAlign: 'justify'}}>Vous trouverez ci-dessous les adresses e-mail et autres liens-clés pour nous contacter.</div>
                          <div style={{textAlign: 'left', marginLeft: '2em'}}>
                            <ul>
                              <li style={{marginBottom: '10px'}}><span style={{color: 'brown', fontWeight: 'bold'}}>Adresse de contact : </span><a href="mailto:info@lilit.be">info@lilit.be</a></li>
                              <li style={{marginBottom: '10px'}}><span style={{color: 'brown', fontWeight: 'bold'}}>Webmasters : </span><a href="mailto:webmaster@lilit.be">webmaster@lilit.be</a>
                              </li><li><span style={{color: 'brown', fontWeight: 'bold'}}>Administrateurs : </span>Sébastien Baguette <em>(président)</em>, Frédéric D'haese <em>(trésorier)</em>, Réginald Ratz <em>(secrétaire)</em></li>
                            </ul>
                          </div>
                          <a name="ML" />
                          <h2>Listes de diffusion</h2>
                          <p>Il existe une liste de diffusion (mailing list) ouverte à tous nos sympathisants, vous pouvez vous y inscrire en envoyant un mail à <a href="mailto:public-subscribe@lilit.be">public-subscribe@lilit.be</a> <i><small>(et vous en désinscrire à tout moment en envoyant, depuis votre adresse d'inscription, un mail à <a href="mailto:public-unsubscribe@lilit.be">public-unsubscribe@lilit.be</a>)</small></i>. <strong>Attention :</strong> dans l'intérêt et le respect de tous, l'usage de cette liste est soumis à des <strong>conditions d'utilisation</strong> (voir <a href="#rules-public">ci-dessous</a>).
                          </p><p>Toutes nos activités sont également annoncées sur cette liste.
                            {/*<p>Les <a href="http://listes.lost-oasis.net/?A=LIST&L=public_lilit.be">archives</a> de cette liste sont également disponibles en ligne.*/}
                            <a name="LMP" />
                          </p><h2>LMP ("Linux Meeting Party")</h2>
                          <p>Les Linux Meeting Parties (LMP) sont des rencontres informelles que nous organisons dans un lieu convivial et où les membres du groupe et les personnes extérieures peuvent se rencontrer pour discuter du groupe, de GNU/Linux et des logiciels libres en général.
                            <br />Elles sont une bonne occasion pour nous contacter, en apprendre plus sur le groupe, et éventuellement <a href="index.php?page=contact#rejoindre">devenir membre</a>.</p>
                          {/*
      <table width="100%"><tr>
      <td align="top" width"*">
      <p>Jusqu'à nouvel ordre, elles ont lieu <strong>chaque premier jeudi du mois</strong> à Liège, de 19h30 à 22h30 à la <strong><a href="index.php?page=Fede">Maison de la Fédé</a></strong>, place du 20 Août, 24, 4000 Liège (en face de l'université, à hauteur de l'arrêt de bus) : voyez l'<strong>annonce détaillée en page d'accueil</strong>.<br/>
      Nous occupons normalement la grande salle du rez-de-chaussée, deuxième porte à droite. <strong>Une sonnette temporaire est placée sur la porte du bâtiment :</strong></p>
      </td>
      <td><img src="pics/LMP-Fede-sonnette.jpg" width=188></img></td>
      </tr>
      </table>
      */}
                          <p>Jusqu'en décembre, elles ont lieu <strong>chaque premier jeudi du mois</strong> à Liège, de 19h30 à 22h30 au Service de Proximité de Grivegnée, avenue Alber Ier 5, 4030 Grivegnée : voyez l'<strong>annonce détaillée en page d'accueil</strong>.</p>
                          {/*OBSO OU LIEN INEXISTANT : Vous trouverez <a href="photos.php?gal=LMP-1">ici</a> et <a href="photos.php?gal=SLMP-1">là</a> des photos de nos premières LMP.*/}
                          <hr />
                          <a name="aider" />
                          <h1>Nous aider</h1>
                          <p>La première et meilleure façon de nous aider est de <strong>faire la publicité</strong> de l'association et de ses activités autour de vous.<br />
                            Notre noyau de membres actifs est beaucoup trop réduit : si vous êtes disponible, même de manière limitée, n'hésitez pas à <strong>vous impliquer</strong>, même sans <i>(ou avant d')</i> <a href="index.php?page=contact#rejoindre">être membre</a>, en sachant que l'ASBL fonctionne sur base strictement <strong>bénévole</strong> et ne peut être associée ou engagée auprès de tiers sans une décision formelle de son Comité.</p>
                          <p>Bien entendu, <strong>faire connaître GNU/Linux</strong> et le logiciel libre est encore plus important : de nombreux autres groupes existent, y compris dans notre région, et même en étant simple utilisateur, il y a de multiples manières de contribuer au logiciel libre, suivant vos affinités et vos compétences (interrogez-nous au besoin). Rien que <strong>montrer le système GNU/Linux</strong> (via votre ordinateur ou une simple <a href="https://fr.wikipedia.org/wiki/Live_USB">clé USB "live"</a>) à d'autres, sans cacher les problèmes ni craindre les critiques, est déjà une action très utile !</p>
                          <p>Pour préserver la <strong>gratuité</strong> de nos activités, nous sommes toujours à la recherche de <strong>sponsors</strong> (pour une aide financière et/ou matérielle). N'hésitez pas à <a href="mailto:info@lilit.be">nous contacter</a>.<br />
                            Vous pouvez également nous <strong>faire un don</strong> (inconditionnel et non spécifique sauf mention explicite de votre part). Si vous souhaitez la confidentialité de vos dons, veuillez également nous en informer au préalable.</p>
                          <p><strong>Numéro de compte : BE48 9796 2081 1927</strong>
                          </p>
                          <hr />
                          <a name="rejoindre" />
                          <h1>Devenir membre</h1>
                          <p>Pour devenir membre, le mieux est de venir nous rencontrer à l'une de nos LMP. Si vous adhérez aux objectifs et <a href="index.php?page=asbl#Textesofficiels">aux règles</a> du groupe et souhaitez nous soutenir, vous pouvez demander votre affiliation. Après son acceptation <em>(puis chaque fin d'année suivante)</em>, vous recevrez une invitation à payer votre cotisation annuelle; elle est actuellement de 10 EUR <em>(la première cotisation est réduite de 50% si vous vous affiliez après le 30 juin)</em>.<br />
                            Si vous voulez vous impliquer dans notre fonctionnement et participer aux décisions, vous pouvez (après 4 mois d'affiliation) demander à devenir membre <strong>effectif</strong>.<br />
                          </p><p><strong>Bien entendu, vous pouvez participer à nos activités sans être membre !</strong>
                          </p><hr />
                          <a name="rules-public" />
                          <h1>Annexe : conditions d'utilisation de la mailing-list "public"</h1>
                          <p>En vous abonnant à la liste de diffusion "public@lilit.be" (ci-après "la liste"), en restant abonné ou en consultant les messages archivés, vous acceptez les présentes conditions d'utilisation.
                          </p><ul>
                            <li>Des responsabilités
                              <ul><li>Le fait d'envoyer un message sur la liste engage votre responsabilité d'auteur, notamment, mais pas exclusivement, en termes de respect des droits d'auteur d'autrui.</li>
                                <li>La liste étant publique, le fait d'y envoyer un message constitue une autorisation explicite de diffusion. Tout ce que vous y postez pourrait être lu partout dans le monde, par n'importe qui, pour une durée indéterminée.</li>
                                <li>LiLiT asbl décline toute responsabilité quant à la valeur, à la pertinence et à la non nocivité des informations diffusées via la liste, ainsi qu'à la compétence des auteurs.</li>
                              </ul>
                            </li><li>De l'objet
                              <ul><li>La liste est réservée aux discussions traitant de près ou de loin des logiciels libres, hormis la vie de l'asbl LiLiT, qui dispose de listes dédiées ("interne@lilit.be" et "member@lilit.be").</li>
                                <li>Après avoir posé une question, envoyer un résumé des réponses obtenues et surtout des (non) solutions.</li>
                                <li>Tout message commercial ou publicitaire est formellement interdit et, sous réserve d'autres sanctions et de poursuites, donne droit à une indemnité forfaitaire de 100 EUR au profit de l'asbl, payable dans les dix jours du constat de l'infraction.</li>
                                <li>Sont tolérées les offres et demandes d'emploi, de stage, de formation pour autant qu'elles ne soient pas intempestives et restent à propos.</li>
                                <li>Les messages contraires aux réglementations en vigueur au lieu du siège social de l'asbl (Liège, Belgique) sont interdits (propos racistes, xénophobes, discriminatoires, etc.).</li>
                                <li>Les messages agressifs, injurieux ou diffamatoires, les attaques personnelles, ... sont interdits.</li></ul>
                            </li><li>De la forme
                              <ul><li>L'intitulé d'un message doit refléter son contenu.</li>
                                <li>En répondant à un message, ne citer que ce qu'il faut du message original pour restituer le contexte, ni plus, ni moins.</li>
                                <li>Répondre <i><strong>dans</strong></i> le contexte (c.-à-d. <i><strong>après</strong></i> la question).</li>
                                <li>Respecter les fils de discussion. Utiliser un nouveau message (<i><strong>pas</strong></i> une réponse avec objet modifié) pour lancer un nouveau sujet.</li>
                                <li>Se limiter à du texte brut (pas de HTML, de traitement de texte, d'images, etc.).</li>
                                <li>La langue d'échange préférée est le français correct.</li>
                                <li>Ne pas envoyer de message d'une taille supérieure à 50 kilo-octets, annexes incluses.</li>
                                <li>Ne pas envoyer le même message à plusieurs listes en même temps.</li>
                                <li>Les accusés de réception et autres demandes de notification sont interdits. Ils ne sont ni totalement standardisés, ni totalement fiables et peuvent constituer une atteinte à la vie privée.</li></ul>
                            </li><li>Des sanctions
                              <ul><li>Les sanctions peuvent être infligées à tout contrevenant sur avis de la majorité absolue des membres du comité.</li>
                                <li>Elles peuvent consister en un avertissement, la modération temporaire des messages, le désabonnement sans préavis, l'interdiction de poster.</li>
                                <li>L'auteur concerné peut faire appel auprès de l'AG qui tranchera définitivement lors de sa prochaine réunion.</li></ul>
                            </li></ul>
                          Pour plus d'information consulter la <a href="https://fr.wikipedia.org/wiki/N%C3%A9tiquette">"netiquette"</a>.		<p style={{fontSize: 'small', textAlign: 'right'}}>Dernière modification: 2018 / 08 / 21 11:29
                            {/*Début du footer*/}
                          </p></table>
                      </td>
                    </tr>
                    
                      <td className="bordure-v-r" />
                    <tr>
                      <td className="bordure-bl-bl" />
                      <td className="bordure-h-b" />
                      <td className="bordure-br-br" />
                    </tr>
                    <tr>
                      <td />
                      <td>
                        &nbsp;
                      </td>
                      <td />
                    </tr>
                  </tbody></table>
                <table style={{tableLayout: 'fixed', width: '100%'}} className="separateur" cellSpacing={0} cellPadding={0}>
                  <tbody><tr>
                      <td className="separateur-h-le" />
                      <td className="separateur-h-e" />
                      <td className="separateur-h-re" />
                    </tr>
                  </tbody></table>
                <div style={{textAlign: 'center'}}><a href="#haut" className="locallink">Remonter</a></div>
              </div>
            </div>
          );
        }
      };

      export default Contact ;