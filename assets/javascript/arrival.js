function openQuickView(n, p, s, no, d, i) {
      qName.innerText = n;
      qPrice.innerText = p;
      qSize.innerText = s;
      qNotes.innerText = no;
      qDesc.innerText = d;
      qImage.src = i;
      quickOverlay.style.display = "block";
      quickModal.style.display = "block";
    }
    function closeQuickView() {
      quickOverlay.style.display = "none";
      quickModal.style.display = "none";
    }
    function toggleHeart(b) {
      b.classList.toggle("active");
    }