function LevenshteinDistance(arrayA, arrayB) {
    var distance = new Array(arrayA.length);

    for (var i = 0; i < distance.length; i++) {
        distance[i] = new Array(arrayB.length);
    }

    var a;
    for (a = 0; a < distance.length; a++) {
        distance[a][0] = a;
    }

    var b;
    for (b = 0; b < distance[0].length; b++) {
        distance[0][b] = b;
    }

    for (a = 1; a < distance.length; a++) {
        for (b = 1; b < distance[0].length; b++) {
            if (arrayA[a] === arrayB[b]) {
                distance[a][b] = distance[a - 1][b - 1];
            } else {
                distance[a][b] =
                    min(
                        distance[a - 1][b] + 1,     // Deletion
                        distance[a][b - 1] + 1,     // Insertion
                        distance[a - 1][b - 1] + 1  // Substitution
                    );
            }
        }
    }
    return distance[distance.length - 1][distance[0].length - 1];
}

function min(a, b, c) {
    if (a < b) {
        if (a < c) {
            return a;
        }
    }
    if (b < c) {
        return b;
    }
    return c;
}