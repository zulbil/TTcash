// *****************************************************************************************************
//  INSTRUCTIONS:
//      0. Ne paniquez pas
//      1. Cliquer sur Fork en bas de page pour créer une copie de l'espace de travail.
//         Vous n'êtes pas obligé de créer un compte. Une session anonyme est acceptable.
//      2. Pour chacune des spécifications Jasmin (tests unitaires) ci-dessous, effectuez les
//         modifications correctives pour que les tests réussissent.
//      3. Vous n'avez pas besoin d'avoir des connaissances sur Jasmin pour effectuer ces exercises.
//         Néanmoins, les informations sont disponibles en ligne sur commment cela fonction, notamment
//         sur le site officiel de Jasmin.
//      4. Une fois terminé, envoyez-nous l'URL de votre codepen (votre copie de l'espace de travail)
//         afin que nous puissions consulter vos réponses.
// 
//   NOTES:
//      * Les exercices ne sont pas chronométrés. Vous devez néanmoins indiquer durant
//        la soumission de vos réponses le temps que vous avez pris pour résoudre ces exercices.
//      * Vous pouvez utiliser toutes les ressources que vous voulez,
//        mais vous devez être en mesure d'expliquer vos réponses lors d'une interview.
//      * Consultez les commentaires TODO pour obtenir des instructions.
//      * Ne modifiez pas les appels `expect()`. C'est grace aux appels à la fonction expect()
//        que chaque exercise est jugé correct ou pas.
//      * Après chaque modification, les tests seront réexécutés automatiquement:
//        Les points verts indiquent le succès (vous avez résolu l'exercice),
//        et les points rouges inversement (votre réponse est incorrecte).
//
// *****************************************************************************************************
describe("Tests Developpeur Javascript", function () {
	"use strict";
  
  it("Booléens", function() {
    function boolean(x, y) {
      // TODO: Ecrivez une fonction qui retourne true si la valeur de x est vraie,
      // ou si la valeur de y est 10, sinon retourne false.
      var isTrue = (x || y == 10) ? true : false;
      return isTrue;
    }

    // Jasmin: Test Unitaires
    expect(boolean(true, 99)).toBe(true);
    expect(boolean(false, 10)).toBe(true);
    expect(boolean(false, 99)).toBe(false);
  });
  
  it("Boucle", function() {
		let sum = 0;
    
    // TODO: écrivez une boucle 'for' qui fait la sommation des nombres pairs 
    // compris dans la plage de [1 à 50] (50 inclu)
    for (i=1 ; i<= 50; i++) {
      if (i%2 === 0) {
        sum += i; 
      }
    }
    
    // Jasmin: Test Unitaires
    expect(sum).toBe(650);
  });

  it("Programmation fonctionnelle", function() {
    const originValue = "test";
    const rappellesToi = function (secret) {
      // TODO: Écrivez une fonction qui capture une valeur d'origine et
      // produit une fonction qui renvoie vrai (true) si le paramètre
      // correspond à la valeur d'origine. Pensez par exemple à la
      // vérification d'un mot de passe. Vous ne voudriez pas divulguer
      // le secret à l'appelant, vous voulez juste lui dire s'il a raison ou non.
      return secret === originValue;
    };
    
    // imaginez que cette fonction soit passée ailleurs.
    const match = rappellesToi(10);
    const other = rappellesToi("bob");

    // Jasmin: Test Unitaires
    expect(match(10)).toBe(true);
    expect(match("10")).toBe(false);
    expect(other("bob")).toBe(true);
    expect(other(10)).toBe(false);
  });
  
  it("Table de recherche: première partie", function () {
    function translate(number) {
      // TODO: convertissez cette instruction switch en une table de recherche pour convertir
      // les nombres 1, 2, 3, 4 à leurs équivalents en français (un, deux, trois, quatre)
      // cette fonction doit avoir une seule instruction de retour.
      switch (number) {
        case 1:
          return "un";
          break;
        case 2:
          return "deux";
          break;
        case 3:
          return "trois";
          break;
        case 4: 
          return "quatre";
          break;
      }
    }

    // Jasmin: Test Unitaires
    expect(translate(1)).toBe("one");
    expect(translate(2)).toBe("two");
    expect(translate(3)).toBe("three");
    expect(translate(4)).toBe("four");
  });
  
  it("Table de recherche: suite", function() {
    function translate(number, language) {
      // TODO: En utilisant le même schéma de table de recherche utilisé dans votre
      // réponse à  l'exercice précédent (Table de recherche: première partie ),
      // étendez la fonction pour qu'elle puisse traduire également les nombres 1-4
      // en valeurs localisées anglais (code pays en). Ces valeurs sont: "one", "two",
      // "three", et "four"
    }

    // Jasmin: Test Unitaires
    expect(translate(1, 'en')).toBe("one");
    expect(translate(2, 'en')).toBe("two");
    expect(translate(3, 'en')).toBe("three");
    expect(translate(4, 'en')).toBe("four");

    expect(translate(1, 'fr')).toBe("un");
    expect(translate(2, 'fr')).toBe("deux");
    expect(translate(3, 'fr')).toBe("trois");
    expect(translate(4, 'fr')).toBe("quatre");
  });
  
  it("Recursion", function() {
    function fibonacci(number) {
      // TODO: écrire une fonction qui calcule la suite de Fibonacci de façon recursive
    }
    
    // Jasmin: Test Unitaires
    expect(fibonacci(0)).toBe(0)
    expect(fibonacci(1)).toBe(1)
    expect(fibonacci(2)).toBe(1)
    expect(fibonacci(3)).toBe(2)
    expect(fibonacci(13)).toBe(233)
    expect(fibonacci(14)).toBe(377)
    expect(fibonacci(20)).toBe(6765)
    expect(fibonacci(60)).toBe(1548008755920)
  });
  
  it("Arrays: Rotation Gauche", function () {
    // DESCRIPTION: 
    //  Une opération de rotation à gauche sur un tableau décale chaque éléments
    //  du tableau vers la gauche. Par exemple, si des rotations à gauche sont
    //  effectuées sur le tableau [1,2,3,4,6], le tableau deviendrait [3,4,5,1,2]
    // 
    //  Étant donné un tableau d'entiers a, effectuez n rotations à gauche sur
    //  le tableau. La fonction retourne le tableau mis à jour.
    function rotateLeft(a, n) {
      // TODO: implementer la fonction telle que definie dans DESCRIPTION
    }
    
    // Jasmin: Test Unitaires
    let input = [1,2,3,4,6];
    let expected = [3,4,5,1,2];
    expect(rotateLeft(input, 4)).toBe(expected);
    input = [41, 73,89,7,10,1,59,58,84,77,77,97,58,1,86,58,26,10,86,51];
    expected = [7,97, 58, 1, 86, 58, 26, 10, 86, 51, 41, 73, 89, 7, 10, 1, 59, 58, 84, 77]
    expect(rotateLeft(input, 10)).toBe(expected);
    input = [98,67,35,1,74,79,7,26,54,63,24,17,32,81];
    expected = [26, 54, 63, 24, 17, 32, 81, 98, 67, 35 ,1 ,74, 79, 7]
    expect(rotateLeft(input, 7)).toBe(expected);
  });
  
  it('Sorting: Bubble Sort', function () {
    // INSTRUCTIONS: considerez l'implementation (incomplète) ci-dessous de
    // l'algorithme de tri par permutation (Bubble Sorte).
    // Suivez les instructions contenu dans les définition des
    // differentes fonctions.
    
    function swap(a, b) {
      // TODO implementez cette fonction: permute a et b
    }
    
    function countSwaps() {
      // TODO implementez cette fonction: compte le nombre de permutation
    }
    
    function bubbleSort(a) {
      // TODO:
      // 1. Modifiez cette fonction afin qu'elle puisse faire appel
      //    à countSwaps pour compter le nombre de permutations
      // 2. Modifiez cette function afin qu'elle puisse retourner
      //    un tableau de trois éléments ayant la forme suivante:
      //    [numSwaps, firstElement, lastElement]
      // Chaque élément correspondant respectivement à:
      //    * numSwaps = nombre de permutations
      //    * firstElement = premier element du tableau trié
      //    * lastElement = dernier element du tableau trié
      const n = len(a);
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            // Permute les éléments adjacents s'ils sont dans l'ordre décroissant
            if (a[j] > a[j + 1]) {
                swap(a[j], a[j + 1]);
            }
        }
      }
    }
    
    // Jasmin: Test Unitaires
    expect(bubbleSort([1,2,3])).toBe([0,1,3]);
    expect(bubbleSort([3,2,1])).toBe([3,1,3]);
    expect(bubbleSort([4,2,3,1])).toBe([5,1,4]);
  });
  
  it("Anagramme", function () {
    // Étant donné deux chaînes de caractères a et b, et qui peuvent ou
    // non être de la même longueur, déterminez le nombre minimum de
    // suppressions de caractères nécessaires pour faire de a et b
    // des anagrammes. N'importe quel caractèr peut être supprimé de l'une
    // des chaînes.
    //
    // Par exemple, si a = "cde", et b = "dcf", nous pouvons effacer la
    // lettre e de la chaine de charactères a, et effacer f de la chaine
    // de charactères b pour que les deux chaines de charactères restantes
    // "cd" et "dc" sont des anagrams.
    function makeAnagram(a, b) {
      // TODO implementez cette function. Elle retourne un entier égal
      // au minimum de nombre de caractères qui doivent etre effacés pour
      // faire que a et b (les deux sont des chaines de charactères)
      // soient des anagrammes.
    }
    
    // Jasmin: Test Unitaires
    expect(makeAnagram("cde",'dcf')).toBe(2);
    expect(makeAnagram("cde",'abc')).toBe(4);
    expect(makeAnagram(
      "fcrxzwscanmligyxyvym",
      'jxwtrhvujlmrpdoqbisbwhmgpmeoke')).toBe(30);
    expect(makeAnagram(
      "bugexikjevtubidpulaelsbcqlupwetzyzdvjphn",
      'lajoipfecfinxjspxmevqxuqyalhrsxcvgsdxxkacspbchrbvvwnvsdtsrdk')).toBe(40);
  });
  
  it("Palindrome", function () {
    function palindrome(possiblePalindrome) {
      // TODO: Ecrivez une fonction qui vérifie si son paramètre (chaine de charactères)
      // peut se lire indifféremment de gauche à droite ou de droite à gauche (=palindrome)
      // (Exemple : le mot 'ressasser' ou la phrase 'Ésope reste ici et se repose')
      // La fonction retourn un booléen qui indique si c'est le cas ou pas.
    }
    
    // Jasmin: Test Unitaires
    expect(palindrome("ressasser")).toBe(true);
    expect(palindrome("Ésope reste ici et se repose")).toBe(true);
    expect(palindrome("Ceci n'est pas un palindrome")).toBe(false);
    expect(palindrome("rats live on no evil star")).toBe(true);
    expect(palindrome("this is not a palindrome")).toBe(false);
  });
});
