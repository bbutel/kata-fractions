# kata-fractions

Enoncé extrait du livre "Software craft, TDD, Clean Code et autres pratiques essentielles" de Cyrille Martraire, Arnaud Thiéfaine, Dorra Bartaguiz, Fabien Hiegel et Houssam Fakih.

Le Kata Fraction consiste à écrire une application qui permet d'effectuer les quatre opérations mathématiques de base sur les fractions:
* l'addition
* la soustraction
* la multiplication
* la division

le programme doit donner le résultat sous la forme de fraction irréductible et donc si besoin simplifiée.

Exemples de fractions:
* 4/7 + 2/7 = 6/7
* 4/7 - 2/7 = 2/7
* 4/7 * 2/7 = 8/49
* 4/7 ÷ 2/7 = 2

## Ajout de mes propres règles implicites

* Une fraction ne peut avoir 0 en diviseur
* Lorsque le quotient est exact, le reste est égal à 0
* Pour additionner ou soustraire de fractions, il est nécessaire que les dénominateurs soient égaux. Si les quotients à ajouter (ou soustraire) ont:
    * a) des dénominateurs égaux: Le résultat a le même dénominateur et a pour numérateur la somme (différence) des numérateurs.
    * b) des dénominateurs différents: Vous remplacerez les dénominateurs par un dénominateur commun qui est un multiple commun des dénominateurs donnés. Après avoir recalculé les numérateurs (voir l'exemple ci-dessous) vous opérez comme au a). 1/3 + 1/4 = 4/12 + 3/12 = 7/12
* Pour effectuer le produit de fractions, il suffit d'effectuer les produits des numérateurs, puis le produit des dénominateurs
* division: Le quotient de a/b (dividende) par c/d (diviseur) est le produit de a/b par l'inverse de c/d (c'est à dire par d/c).