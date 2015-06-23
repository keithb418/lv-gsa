# FROM ubuntu:14.10

# MAINTAINER Stephen Wright (clurect)

# #basic
# RUN apt-get install -y --no-install-recommends software-properties-common
# RUN add-apt-repository -y ppa:webupd8team/java
# RUN apt-get update && apt-get install -y curl git-core wget unzip
# RUN echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections
# RUN apt-get install -y oracle-java8-installer
# RUN apt-get install -y build-essential
# RUN java -version

# ENV JAVA_HOME /usr/lib/jvm/java-8-oracle
# RUN wget http://apache.mirrors.ionfish.org/tomcat/tomcat-8/v8.0.23/bin/apache-tomcat-8.0.23.zip
# RUN unzip apache-tomcat-8.0.23.zip
# COPY docker-conf/tomcat-users.xml apache-tomcat-8.0.23/conf/

# EXPOSE 8080
# ENV CATALINA_HOME /apache-tomcat-8.0.23
# RUN echo $CATALINA_HOME
# RUN chmod +x /apache-tomcat-8.0.23/bin/catalina.sh
# CMD ["/apache-tomcat-8.0.23/bin/catalina.sh jpda start"]

FROM java:8-jre

ENV CATALINA_HOME /usr/local/tomcat
ENV PATH $CATALINA_HOME/bin:$PATH
RUN mkdir -p "$CATALINA_HOME"
WORKDIR $CATALINA_HOME

# see https://www.apache.org/dist/tomcat/tomcat-8/KEYS
RUN gpg --keyserver pool.sks-keyservers.net --recv-keys \
	05AB33110949707C93A279E3D3EFE6B686867BA6 \
	07E48665A34DCAFAE522E5E6266191C37C037D42 \
	47309207D818FFD8DCD3F83F1931D684307A10A5 \
	541FBE7D8F78B25E055DDEE13C370389288584E7 \
	61B832AC2F1C5A90F0F9B00A1C506407564C17A3 \
	79F7026C690BAA50B92CD8B66A3AD3F4F22C4FED \
	9BA44C2621385CB966EBA586F72C284D731FABEE \
	A27677289986DB50844682F8ACB77FC2E86E29AC \
	A9C5DF4D22E99998D9875A5110C01C5A2F6059E7 \
	DCFD35E0BF8CA7344752DE8B6FB21E8933C60243 \
	F3A04C595DB5B6A5F1ECA43E3B7BBB100D811BBE \
	F7DA48BB64BCB84ECBA7EE6935CD23C10D498E23

ENV TOMCAT_MAJOR 8
ENV TOMCAT_VERSION 8.0.23
ENV TOMCAT_TGZ_URL https://www.apache.org/dist/tomcat/tomcat-$TOMCAT_MAJOR/v$TOMCAT_VERSION/bin/apache-tomcat-$TOMCAT_VERSION.tar.gz

RUN set -x \
	&& curl -fSL "$TOMCAT_TGZ_URL" -o tomcat.tar.gz \
	&& curl -fSL "$TOMCAT_TGZ_URL.asc" -o tomcat.tar.gz.asc \
	&& gpg --verify tomcat.tar.gz.asc \
	&& tar -xvf tomcat.tar.gz --strip-components=1 \
	&& rm bin/*.bat \
	&& rm tomcat.tar.gz*

COPY docker-conf/tomcat-users.xml $CATALINA_HOME/conf/

EXPOSE 8080
CMD ["catalina.sh", "run"]
