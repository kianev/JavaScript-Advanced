function posts() {
    class Post{
        constructor(title,content){
            this.title = title;
            this.content = content;
        }

        toString(){
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post{
        constructor(title,content,likes,dislikes){
            super(title,content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }

        addComment(comment){
            this.comments.push(comment);
        }

        toString(){
         let string = super.toString() + `\nRating: ${this.likes - this.dislikes}`;
         if(this.comments.length > 0){
             string += "\nComments:";
             this.comments.forEach(c => string += `\n*${c}`);
         }
         return string;
        }
    }

    class BlogPost extends Post{
        constructor(title,content,views){
            super(title,content);
            this.views = Number(views);
        }

        view(){
            this.views++;
            return this;
        }

        toString(){
            return super.toString() + `\nViews: ${this.views}`;
        }
    }
    let post = new Post("Post", "Content");
    //console.log(post.toString());
    let smc = new SocialMediaPost("TestTitle", "TestContent", 25, 30);
    smc.addComment("Good post");
    smc.addComment("Very good post");
    smc.addComment("Wow!");
    console.log(smc.toString());

    return {Post, SocialMediaPost, BlogPost};
}

posts();


